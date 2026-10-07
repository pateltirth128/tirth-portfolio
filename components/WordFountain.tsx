"use client";
import { useEffect, useRef } from "react";
import { randomWord, monoFont, isLateWord } from "@/lib/words";

type Drop = {
  x: number;
  minX: number;
  maxX: number;
  y: number;
  vy: number;
  heading: number;
  word: string;
  size: number;
  bright: boolean;
};

type Spark = {
  x: number;
  life: number;
};

const FALL_SPEED = 1.4;
const SWAY = 0.15;
// About 25% of the old amount (was 90 drops, one every 25-70 frames)
const MAX_DROPS = 22;
const MIN_GAP = 100;
const MAX_GAP = 280;

// Width of the main content column (max-w-5xl = 1024px) plus a safety margin.
// Words only fall in the empty space on the left and right of it.
const CONTENT_WIDTH = 1024;
const CONTENT_MARGIN = 40;
const EDGE_PADDING = 12;

export default function WordFountain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const font = monoFont();
    let width = 0;
    let height = 0;
    let raf = 0;
    let nextSpawn = 0;
    const drops: Drop[] = [];
    const sparks: Spark[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops.length = 0; // lanes change with the window size, so start fresh
    };
    resize();
    window.addEventListener("resize", resize);

    const linePageY = () => {
      const line = document.getElementById("word-line");
      if (!line) return document.documentElement.scrollHeight;
      return line.getBoundingClientRect().top + window.scrollY;
    };

    const randomGap = () => MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP);

    // Left and right lanes outside the content column, as [minX, maxX] for the word's left edge
    const lanesFor = (wordWidth: number) => {
      const contentLeft = (width - CONTENT_WIDTH) / 2 - CONTENT_MARGIN;
      const contentRight = (width + CONTENT_WIDTH) / 2 + CONTENT_MARGIN;
      const lanes: [number, number][] = [];
      const leftMax = contentLeft - wordWidth;
      if (leftMax > EDGE_PADDING) lanes.push([EDGE_PADDING, leftMax]);
      const rightMax = width - EDGE_PADDING - wordWidth;
      if (rightMax > contentRight) lanes.push([contentRight, rightMax]);
      return lanes;
    };

    const spawn = () => {
      if (drops.length >= MAX_DROPS) return;
      const word = randomWord();
      const size = 8 + Math.random() * 3;
      ctx.font = `${size}px ${font}`;
      const lanes = lanesFor(ctx.measureText(word).width);
      if (lanes.length === 0) return; // screen too narrow: no room beside the content
      const [minX, maxX] = lanes[Math.floor(Math.random() * lanes.length)];
      drops.push({
        x: minX + Math.random() * (maxX - minX),
        minX,
        maxX,
        y: window.scrollY - 20,
        vy: FALL_SPEED * (0.6 + Math.random() * 0.8),
        heading: Math.random() * Math.PI * 2,
        word,
        size,
        bright: Math.random() < 0.15,
      });
    };

    const draw = () => {
      const scroll = window.scrollY;
      const lineY = linePageY();
      const lineScreenY = lineY - scroll;

      ctx.clearRect(0, 0, width, height);

      nextSpawn--;
      if (nextSpawn <= 0) {
        spawn();
        nextSpawn = randomGap();
      }

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];

        d.heading += (Math.random() - 0.5) * 0.3;
        d.x += Math.cos(d.heading) * SWAY;
        d.y += d.vy;

        // Stay inside its own side lane so it never drifts over the content
        if (d.x < d.minX) { d.x = d.minX; d.heading = Math.PI - d.heading; }
        if (d.x > d.maxX) { d.x = d.maxX; d.heading = Math.PI - d.heading; }

        if (d.y >= lineY) {
          sparks.push({ x: d.x, life: 30 });
          drops.splice(i, 1);
          continue;
        }

        const screenY = d.y - scroll;
        if (screenY < -50 || screenY > height + 50) continue;

        const alpha = d.bright ? 0.55 : 0.2;

        ctx.font = `${d.size}px ${font}`;
        if (isLateWord(d.word)) {
          ctx.fillStyle = "rgba(255, 59, 59, 0.85)";
          ctx.shadowColor = "rgba(255, 59, 59, 0.7)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`;
          ctx.shadowColor = d.bright ? "rgba(0, 255, 65, 0.6)" : "transparent";
          ctx.shadowBlur = d.bright ? 6 : 0;
        }
        ctx.fillText(d.word, d.x, screenY);
      }

      ctx.shadowBlur = 0;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life--;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        if (lineScreenY < -60 || lineScreenY > height + 60) continue;
        const t = s.life / 30;
        const g = ctx.createRadialGradient(s.x, lineScreenY, 0, s.x, lineScreenY, 40 * (1.5 - t));
        g.addColorStop(0, `rgba(0, 255, 65, ${0.6 * t})`);
        g.addColorStop(1, "rgba(0, 255, 65, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(s.x, lineScreenY, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-screen w-screen -z-10 hidden xl:block"
    />
  );
}

/*
 * Hey, you made it all the way down here!
 *
 * I appreciate you taking the time to come here, whether you're analyzing
 * this code or just checking out how I made it. If you like it, text me.
 * You do have my phone number, right? If you don't, check out my CV and
 * grab it from there, noob.
 *
 * - Tirth
 */