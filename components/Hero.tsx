"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-30 dark:opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-sm md:text-base">
            {"<developer>"}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Muhd Salihin
          </span>
        </h1>

        <div className="h-12 md:h-16 mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            <span className="font-mono">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span>, and{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">TypeScript</span>.
          Turning complex problems into elegant solutions.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Let&apos;s Connect
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>

        <div className="mb-6 inline-block">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-sm md:text-base">
            {"</developer>"}
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
