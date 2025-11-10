export function convertObjectKeysToArray(
  obj: Record<string, unknown>
): string[] {
  return Object.keys(obj)
}
