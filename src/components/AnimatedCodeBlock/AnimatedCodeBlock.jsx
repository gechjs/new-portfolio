import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "class Developer {", color: "text-accent" },
  { text: "  constructor() {", color: "text-muted-foreground" },
  { text: '    this.name = "Creative Dev";', color: "text-primary" },
  { text: '    this.role = "Full-Stack";', color: "text-primary" },
  { text: "    this.skills = [];", color: "text-muted-foreground" },
  { text: "  }", color: "text-muted-foreground" },
  { text: "", color: "" },
  { text: "  async think() {", color: "text-accent" },
  { text: "    return innovative_solution;", color: "text-primary" },
  { text: "  }", color: "text-muted-foreground" },
  { text: "", color: "" },
  { text: "  build(idea) {", color: "text-accent" },
  { text: "    while (idea.hasValue) {", color: "text-muted-foreground" },
  { text: "      this.code();", color: "text-primary" },
  { text: "      this.optimize();", color: "text-primary" },
  { text: "      this.deploy();", color: "text-primary" },
  { text: "    }", color: "text-muted-foreground" },
  { text: "  }", color: "text-muted-foreground" },
  { text: "}", color: "text-accent" },
];

export const AnimatedCodeBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev >= codeLines.length ? 0 : prev + 1));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />

      <div className="relative glass-card p-6 rounded-2xl overflow-hidden">
        {/* Window Controls */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-muted-foreground font-mono">
            developer.ts
          </span>
        </div>

        {/* Code Content */}
        <div className="font-mono text-sm space-y-1 min-h-[380px]">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: index < visibleLines ? 1 : 0.2,
                x: index < visibleLines ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <span className="w-8 text-muted-foreground/50 select-none">
                {index + 1}
              </span>
              <span className={line.color}>{line.text}</span>
              {index === visibleLines - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-2 h-5 bg-primary ml-1"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Thinking...
            </span>
            <span>TypeScript</span>
          </div>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};
