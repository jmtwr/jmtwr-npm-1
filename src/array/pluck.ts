export function pluck<T, K extends keyof T>(elements: T[], field: K): T[K][] {
  return elements.map((element) => element[field]);
}
