"use client";

import React, { forwardRef } from "react";

// Lightweight class merge utility (replaces external clsx dependency)
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Variant = "primary" | "outline" | "link";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
};

const base = "relative inline-flex items-center justify-center whitespace-nowrap select-none font-medium tracking-wide transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "rounded-full px-5 py-2 bg-gold/90 hover:bg-gold text-night border border-gold/20 shadow-[0_4px_14px_-4px_rgba(244,230,194,0.45)] hover:shadow-[0_6px_22px_-6px_rgba(244,230,194,0.55)]",
  outline: "rounded-full px-5 py-2 bg-[#161b22] border border-gold/30 text-gold hover:border-gold/60 hover:bg-[#1c2229]",
  link: "px-0 py-0 text-gold underline underline-offset-4 hover:text-aurora",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", asChild = false, ...rest },
  ref
) {
  const cn = cx(base, variants[variant], className);
  if (asChild) {
    // Allow using <Button asChild><a /></Button> pattern if desired later
    return <span className={cn}>{rest.children}</span>;
  }
  return <button ref={ref} className={cn} {...rest} />;
});

export function buttonLinkClass(variant: Variant = "link", className?: string) {
  return cx(base, variants[variant], className);
}
