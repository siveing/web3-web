import { type ClassValue, clsx } from "clsx"
import { getCookie } from "cookies-next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAuthCookie: boolean = getCookie('isLoggedIn') ? JSON.parse(getCookie('isLoggedIn') as string) : false;
