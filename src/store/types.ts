export type ZustandSet<T = undefined> = (
  partial: T | Partial<T> | ((state: T) => T | Partial<T>),
  replace?: false,
) => void;

export type ZustandGet<T = undefined> = () => T;
