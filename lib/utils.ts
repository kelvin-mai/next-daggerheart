import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isNumber = (value: unknown): value is number =>
  Number.isFinite(value);

export const safeParseInt = (value: string) => {
  return isNumber(value) ? parseInt(value) : 0;
};
