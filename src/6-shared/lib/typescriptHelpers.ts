export function unionGuard(value: never, error: string): never {
  throw new Error(`${error}. Значение: ${value}`)
}
