"use client";

import { useEffect, useRef } from "react";
import { MotionValue } from "framer-motion";

interface Node {
  x: number;
  y: number;
  col: number;
  row: number;
  isVia: boolean;
  isAccent: boolean;
}

interface Edge {
  a: Node;
  b: Node;
  points: { x: number, y: number }[];
  length: number;
}

interface Pulse {
  edge: Edge;
  progress: number;
  speed: number;
}

function getPCBPath(A: Node, B: Node) {
  const dx = B.x - A.x;
  const dy = B.y - A.y;
  const signY = Math.sign(dy) || 1;
  const signX = Math.sign(dx) || 1;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  const pts = [{ x: A.x, y: A.y }];

  if (absDx > absDy) {
    const midX = A.x + dx / 2;
    const d = absDy / 2;
    pts.push({ x: midX - d * signX, y: A.y });
    pts.push({ x: midX + d * signX, y: B.y });
  } else {
    const midY = A.y + dy / 2;
    const d = absDx / 2;
    pts.push({ x: A.x, y: midY - d * signY });
    pts.push({ x: B.x, y: midY + d * signY });
  }
  pts.push({ x: B.x, y: B.y });
  return pts;
}

function getPathLength(pts: {x: number, y: number}[]) {
  let len = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i+1].x - pts[i].x;
    const dy = pts[i+1].y - pts[i].y;
    len += Math.sqrt(dx*dx + dy*dy);
  }
  return len;
}

function getPointOnPath(pts: {x: number, y: number}[], progress: number, totalLength: number) {
  let target = progress * totalLength;
  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i];
    const p2 = pts[i+1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    
    if (target <= dist) {
      const t = dist === 0 ? 0 : target / dist;
      return { x: p1.x + dx * t, y: p1.y + dy * t };
    }
    target -= dist;
  }
  return pts[pts.length - 1];
}

function buildNetwork(width: number, height: number) {
  const cellSize = 140; // Reduced density for much better rendering performance
  const cols = Math.ceil(width / cellSize) + 2;
  const rows = Math.ceil(height / cellSize) + 2;
  
  const nodesMap: (Node | null)[][] = Array.from({ length: cols }, () => Array(rows).fill(null));
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (Math.random() > 0.3) {
        const jitterX = (Math.random() - 0.5) * 20;
        const jitterY = (Math.random() - 0.5) * 20;
        const node: Node = {
          x: c * cellSize + jitterX,
          y: r * cellSize + jitterY,
          col: c,
          row: r,
          isVia: Math.random() > 0.7,
          isAccent: Math.random() > 0.95
        };
        nodesMap[c][r] = node;
        nodes.push(node);
      }
    }
  }

  for (const node of nodes) {
    const c = node.col;
    const r = node.row;
    if (c < cols - 1 && nodesMap[c+1][r] && Math.random() > 0.5) {
      const target = nodesMap[c+1][r]!;
      const pts = getPCBPath(node, target);
      edges.push({ a: node, b: target, points: pts, length: getPathLength(pts) });
    }
    if (r < rows - 1 && nodesMap[c][r+1] && Math.random() > 0.5) {
      const target = nodesMap[c][r+1]!;
      const pts = getPCBPath(node, target);
      edges.push({ a: node, b: target, points: pts, length: getPathLength(pts) });
    }
  }

  return { nodes, edges };
}

export default function NetworkCanvas({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let { nodes, edges } = buildNetwork(width, height);
    const pulses: Pulse[] = [];

    const spawnPulse = () => {
      if (edges.length === 0) return;
      if (pulses.length < 12) {
        const edge = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ edge, progress: 0, speed: 0.004 + Math.random() * 0.005 });
      }
    };

    let animationFrameId: number;
    let isPaused = false;

    // Pause when tab is hidden (B1 fix + P6 fix)
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = (time: number) => {
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);
      
      const currentMouseX = mouseX.get() > -100 ? mouseX.get() : width / 2;
      const currentMouseY = mouseY.get() > -100 ? mouseY.get() : height / 2;

      const driftX = Math.sin(time * 0.0005) * 15;
      const driftY = Math.cos(time * 0.0006) * 15;

      ctx.save();
      ctx.translate(driftX, driftY);

      // Render Edges (Traces)
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "round";
      for (const edge of edges) {
        const midX = (edge.a.x + edge.b.x) / 2;
        const midY = (edge.a.y + edge.b.y) / 2;
        
        const dx = midX + driftX - currentMouseX;
        const dy = midY + driftY - currentMouseY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        const maxDist = 450;
        let intensity = 0;
        if (dist < maxDist) {
          const norm = 1 - (dist / maxDist);
          intensity = norm * norm;
        }
        
        const opacity = 0.04 + (intensity * 0.81);
        
        ctx.beginPath();
        ctx.moveTo(edge.points[0].x, edge.points[0].y);
        for (let i = 1; i < edge.points.length; i++) {
          ctx.lineTo(edge.points[i].x, edge.points[i].y);
        }
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.stroke();
      }

      // Render Nodes (Pads/Vias)
      for (const node of nodes) {
        const dx = node.x + driftX - currentMouseX;
        const dy = node.y + driftY - currentMouseY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        const maxDist = 450;
        let intensity = 0;
        if (dist < maxDist) {
          const norm = 1 - (dist / maxDist);
          intensity = norm * norm;
        }
        
        const opacity = 0.05 + (intensity * 0.80);
        const size = 5;
        
        if (node.isVia) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
          ctx.strokeStyle = node.isAccent ? `rgba(16, 185, 129, ${opacity})` : `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.fillStyle = node.isAccent ? `rgba(16, 185, 129, ${opacity})` : `rgba(59, 130, 246, ${opacity})`;
          ctx.fillRect(node.x - size, node.y - size, size * 2, size * 2);
        }
      }

      // Render Signal Pulses (P1 fix: batch shadowBlur calls)
      if (pulses.length > 0) {
        ctx.shadowColor = "rgba(59, 130, 246, 1)";
        ctx.shadowBlur = 12; // Set ONCE before the loop
        ctx.fillStyle = "rgba(147, 197, 253, 1)";

        for (let i = pulses.length - 1; i >= 0; i--) {
          const pulse = pulses[i];
          pulse.progress += pulse.speed;
          
          if (pulse.progress >= 1) {
            pulses.splice(i, 1);
            continue;
          }

          const pos = getPointOnPath(pulse.edge.points, pulse.progress, pulse.edge.length);
          
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0; // Reset ONCE after the loop
      }

      ctx.restore();

      if (Math.random() > 0.93) spawnPulse();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // P2 fix: Rebuild network on resize (debounced)
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        // Rebuild the entire network at new dimensions
        const rebuilt = buildNetwork(width, height);
        nodes = rebuilt.nodes;
        edges = rebuilt.edges;
        pulses.length = 0; // Clear stale pulses
      }, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
}
