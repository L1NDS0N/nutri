type TWhere = {
  where: { id: string };
};
type TData<T> = {
  data: T;
};
export interface IGenericRepository<T> {
  findMany(): unknown;
  index: () => Promise<T[] | null>;
  create: ({ data }: TData<T>) => Promise<boolean>;
  findUnique: (where: TWhere) => Promise<T | null>;
  update: ({ data, where }: TData<T> & TWhere) => Promise<T | null>;
  delete: (where: TWhere) => Promise<boolean | null>;
}
