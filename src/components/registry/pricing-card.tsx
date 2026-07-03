import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText?: string;
  isPopular?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  buttonText = "Get Started",
  isPopular = false,
  className,
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-sm flex-col rounded-2xl border bg-card p-6 shadow-sm",
        isPopular && "border-primary shadow-lg",
        className
      )}
      {...props}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold">{price}</span>
        {price !== "Free" && <span className="text-sm font-medium text-muted-foreground">/mo</span>}
      </div>
      <ul className="mb-6 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "inline-flex h-10 w-full items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow"
            : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {buttonText}
      </button>
    </div>
  );
}
