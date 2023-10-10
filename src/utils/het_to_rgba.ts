export function hexToRgba(hex: string, alpha: number): string | null {
  // Remove the hash if it's present
  hex = hex.replace(/^#/, '');

  // Parse the hex value into RGB components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Check if the provided alpha is valid (between 0 and 1)
  if (alpha < 0 || alpha > 1) {
    return null;
  }

  // Construct and return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
