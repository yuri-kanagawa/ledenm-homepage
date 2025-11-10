export type ExactType<T, U extends T> = T &
  Record<Exclude<keyof U, keyof T>, never>
