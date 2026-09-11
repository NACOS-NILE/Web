"use client";

import type { HTMLAttributes, MouseEvent } from "react";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

import { cn } from "@/lib/utils";

export interface ArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ICON_CONTAINER_SIZE = 44;

const PATH_VARIANTS: Variants = {
  normal: { d: "m19 12-7 7-7-7", translateY: 0 },
  animate: {
    d: "m19 12-7 7-7-7",
    translateY: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const SECOND_PATH_VARIANTS: Variants = {
  normal: { d: "M12 5v14" },
  animate: {
    d: ["M12 5v14", "M12 5v9", "M12 5v14"],
    transition: {
      duration: 0.4,
    },
  },
};

const OUTGOING_ARROW_VARIANTS: Variants = {
  normal: { opacity: 1, scaleY: 1, translateY: 0 },
  animate: {
    opacity: [1, 1, 0.12, 0, 0],
    scaleY: [1, 1, 1.28, 1.08, 1.08],
    translateY: [0, 0, 20, 24, 24],
    transition: {
      duration: 1.05,
      ease: "easeInOut",
      times: [0, 0.38, 0.66, 0.74, 1],
    },
  },
};

const INCOMING_ARROW_VARIANTS: Variants = {
  normal: { opacity: 0, scaleY: 1.08, translateY: -24 },
  animate: {
    opacity: [0, 0, 0, 0.12, 1],
    scaleY: [1.08, 1.08, 1.28, 1.22, 1],
    translateY: [-24, -24, -24, -20, 0],
    transition: {
      duration: 1.05,
      ease: "easeInOut",
      times: [0, 0.38, 0.66, 0.74, 1],
    },
  },
};

const ArrowDownIcon = forwardRef<ArrowDownIconHandle, ArrowDownIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();

    const startAnimation = useCallback(() => {
      controls.stop();
      controls.set("normal");
      void controls.start("animate");
    }, [controls]);

    const stopAnimation = useCallback(() => {
      controls.stop();
      controls.set("normal");
    }, [controls]);

    useImperativeHandle(
      ref,
      () => ({ startAnimation, stopAnimation }),
      [startAnimation, stopAnimation],
    );

    const handleMouseEnter = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        startAnimation();
        onMouseEnter?.(event);
      },
      [onMouseEnter, startAnimation],
    );

    const handleMouseLeave = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        stopAnimation();
        onMouseLeave?.(event);
      },
      [onMouseLeave, stopAnimation],
    );

    return (
      <div
        className={cn("grid size-11 place-items-center", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={ICON_CONTAINER_SIZE}
          overflow="visible"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox={`0 0 ${ICON_CONTAINER_SIZE} ${ICON_CONTAINER_SIZE}`}
          width={ICON_CONTAINER_SIZE}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform={`translate(${(ICON_CONTAINER_SIZE - size) / 2} ${(ICON_CONTAINER_SIZE - size) / 2}) scale(${size / 24})`}
          >
            <motion.g
              animate={controls}
              initial="normal"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              variants={OUTGOING_ARROW_VARIANTS}
            >
              <motion.path
                animate={controls}
                d="m19 12-7 7-7-7"
                initial="normal"
                variants={PATH_VARIANTS}
              />
              <motion.path
                animate={controls}
                d="M12 5v14"
                initial="normal"
                variants={SECOND_PATH_VARIANTS}
              />
            </motion.g>
            <motion.g
              animate={controls}
              initial="normal"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              variants={INCOMING_ARROW_VARIANTS}
            >
              <path d="m19 12-7 7-7-7" />
              <path d="M12 5v14" />
            </motion.g>
          </g>
        </svg>
      </div>
    );
  },
);

ArrowDownIcon.displayName = "ArrowDownIcon";

export { ArrowDownIcon };
