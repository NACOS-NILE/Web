"use client";

import { useEffect, useRef } from "react";

// Reuse the exact same PCB pathing logic from NetworkCanvas
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

export default function StaticNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use parent container size instead of window
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        draw(canvas.width, canvas.height);
      }
    };

    const draw = (width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const cellSize = 100;
      const cols = Math.ceil(width / cellSize) + 2;
      const rows = Math.ceil(height / cellSize) + 2;
      
      const nodesMap: (Node | null)[][] = Array.from({ length: cols }, () => Array(rows).fill(null));
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (Math.random() > 0.5) {
            const jitterX = (Math.random() - 0.5) * 15;
            const jitterY = (Math.random() - 0.5) * 15;
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
          edges.push({ a: node, b: nodesMap[c+1][r]!, points: getPCBPath(node, nodesMap[c+1][r]!) });
        }
        if (r < rows - 1 && nodesMap[c][r+1] && Math.random() > 0.5) {
          edges.push({ a: node, b: nodesMap[c][r+1]!, points: getPCBPath(node, nodesMap[c][r+1]!) });
        }
      }

      // Render static with low uniform opacity (0.05)
      ctx.lineWidth = 1;
      ctx.lineJoin = "round";
      for (const edge of edges) {
        ctx.beginPath();
        ctx.moveTo(edge.points[0].x, edge.points[0].y);
        for (let i = 1; i < edge.points.length; i++) {
          ctx.lineTo(edge.points[i].x, edge.points[i].y);
        }
        ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
        ctx.stroke();
      }

      for (const node of nodes) {
        const size = 3;
        if (node.isVia) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(59, 130, 246, 0.06)";
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.05)";
          ctx.fillRect(node.x - size, node.y - size, size * 2, size * 2);
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen" />;
}
