// lib/index.ts or lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and resolves conflicts (e.g., `p-4` vs `p-2`)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
