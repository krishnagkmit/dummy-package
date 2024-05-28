type ICommonInterIndex = Record<string, any>;

type IBuildArrayWithMinLength<
  T,
  N extends number,
  Current extends T[],
> = Current["length"] extends N
  ? [...Current, ...T[]]
  : IBuildArrayWithMinLength<T, N, [...Current, T]>;

type IArrayWithMinLength<T, N extends number> = IBuildArrayWithMinLength<T, N, []>;
