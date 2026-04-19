import { NextResponse } from "next/server";
import path from "path";

// Extremely simple in-memory rate limiter for serverless environment
// Note: In a real multi-instance production environment, use Redis (e.g., @upstash/ratelimit)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // Allowed
  }

  if (now > record.resetTime) {
    // Window expired, reset
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // Allowed
  }

  if (record.count >= limit) {
    return false; // Rate limited
  }

  record.count++;
  return true; // Allowed
}

// Security validations
export const SECURITY = {
  MAX_FILE_BYTES: 5 * 1024 * 1024, // 5MB limit
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"],
  
  // Validates if a requested path is trying to escape the allowed base directory
  isValidPath(requestedFile: string, allowedDirs: string[] = ["data/content"]) {
    // Prevent obvious traversal attempts
    if (requestedFile.includes("..") || requestedFile.startsWith("/")) {
      return false;
    }

    // Ensure it strictly starts with one of the allowed directories
    const isAllowed = allowedDirs.some(dir => requestedFile.startsWith(dir));
    if (!isAllowed) return false;

    // Additional check: Ensure resolved path resolves inside the CWD + allowed base
    // (This works well in local/Node dev, but we also rely on the startsWith check for GitHub API)
    const normalizedRequested = path.normalize(requestedFile);
    if (normalizedRequested.startsWith("..") || normalizedRequested.startsWith(path.sep)) {
      return false;
    }

    return true;
  },

  // Basic XSS Injection rejection
  // Rejects if it detects <script> tags or pure javascript protocols 
  hasMaliciousPatterns(content: string): boolean {
    const maliciousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // <script> tags
      /javascript:/gi, // inline js execution
      /onerror=/gi, /onload=/gi, /onclick=/gi, /onmous(eover|eout|edown|eup)=/gi // inline event handlers
    ];
    return maliciousPatterns.some(pattern => pattern.test(content));
  }
};
