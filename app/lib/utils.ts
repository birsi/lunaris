export function uuid(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Base current advent day derived only from system date (no override)
export function getCurrentDayBase(): number {
  const now = new Date();
  return now.getMonth() === 11 ? Math.min(24, now.getDate()) : 0;
}

// Read a testing override (returns null if invalid or absent). Must be applied client-side.
export function getOverrideDay(): number | null {
  if (typeof window === 'undefined') return null;
  const override = localStorage.getItem('advent:date-override');
  if (!override) return null;
  const day = parseInt(override, 10);
  if (day >= 1 && day <= 24) return day;
  return null;
}

