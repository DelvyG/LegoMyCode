/**
 * Generates a reasonably unique string identifier.
 * Prefers crypto.randomUUID() if available, otherwise uses a simpler fallback.
 * @returns {string} A unique identifier string.
 */
export function uuid(): string {
    // Use the browser's built-in crypto.randomUUID if available (more robust)
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    // Fallback using timestamp and random number (less robust but sufficient for simple cases)
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }