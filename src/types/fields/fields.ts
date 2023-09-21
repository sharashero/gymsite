import { TDocument } from "../common";

export type TField<K extends string, T> = {
  name: string;
  type?: string;
  key: K;
  getDefault(): T;
  format(value: T): string;
}


export type TFieldData
<T extends TField<T[number]["key"] & string, unknown>[]> = TDocument & {
  [prop in T[number] as prop["key"] & string]: ReturnType<prop["getDefault"]>;
}
