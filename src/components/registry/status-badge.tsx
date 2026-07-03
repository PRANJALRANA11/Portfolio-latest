import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "online" | "offline" | "busy" | "away";
  label?: string;
}

export function StatusBadge({
  status,
  label,
  className,
  ...props
}: StatusBadgeProps) {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        {status === "online" && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            statusColors[status]
          )}
        ></span>
      </span>
      {label || status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
}
