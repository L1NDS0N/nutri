export interface IGenericRepository<T> {
  index: () => Promise<T[] | null>;
  create: (data: T) => Promise<boolean>;
  findOne: (id: string) => Promise<T | null>;
  updateOne: (data: T) => Promise<T | null>;
  deleteOne: (id: string) => Promise<boolean | null>;
}
export interface IPrismaDelegateMethods {
  aggregate(data: any): any;
  count(data: any): any;
  create(data: any): any;
  delete(data: any): any;
  deleteMany(data: any): any;
  findFirst(data: any): any;
  findMany(data: any): any;
  findUnique(data: any): any;
  update(data: any): any;
  updateMany(data: any): any;
  upsert(data: any): any;
}
