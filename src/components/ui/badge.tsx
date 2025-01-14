import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        green:
          "border-transparent bg-green-500/50 text-secondary-foreground hover:bg-green-500/50",
        orange:
          "border-transparent bg-orange-500/50 text-secondary-foreground hover:bg-orange-500/50",
        yellow:
          "border-transparent bg-yellow-500/50 text-secondary-foreground hover:bg-yellow-500/50",
        red: "border-transparent bg-red-500/50 text-secondary-foreground hover:bg-red-500/50",
        purple:
          "border-transparent bg-purple-500/50 text-secondary-foreground hover:bg-purple-500/50",
        blue: "border-transparent bg-blue-500/50 text-secondary-foreground hover:bg-blue-500/50",
        pink: "border-transparent bg-pink-500/50 text-secondary-foreground hover:bg-pink-500/50",
        teal: "border-transparent bg-teal-500/50 text-secondary-foreground hover:bg-teal-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
