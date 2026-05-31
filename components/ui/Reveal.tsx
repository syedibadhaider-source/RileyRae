"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
  once?: boolean;
}

const hiddenTransforms: Record<RevealDirection, string> = {
  up: "translate-y-8 opacity-0",
  down: "-translate-y-8 opacity-0",
  left: "translate-x-8 opacity-0",
  right: "-translate-x-8 opacity-0",
  scale: "scale-[0.97] opacity-0",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 900,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hiddenTransforms[direction]
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function Stagger({ children, className = "", stagger = 100 }: StaggerProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={i * stagger} direction="up">
          {child}
        </Reveal>
      ))}
    </div>
  );
}
