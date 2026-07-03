import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
