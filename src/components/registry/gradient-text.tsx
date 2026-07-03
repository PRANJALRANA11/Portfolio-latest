import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
  via?: string;
}

export function GradientText({
  children,
  className,
  from = "from-blue-500",
  to = "to-purple-500",
  via,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-bold",
        from,
        via,
        to,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
