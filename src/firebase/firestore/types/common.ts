export type TDocument = {
  id?: string;
  [key: string]: unknown;
}


export type TObjectRead = Required<TDocument>;
export type TObjectDelete = Required<TDocument>;
export type TObjectCreate
<Type> = Partial<Type>;
export type TObjectUpdate
<Type> = Required<TDocument> & Partial<Type>;
