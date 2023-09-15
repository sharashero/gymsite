export type TDocument = {
  id?: string;
  [key: string]: unknown;
}


type TConstructor = {
  new (): unknown;
}


type TBaseObject = {
  [key: string]: TConstructor;
}


export type TObject<Type extends TBaseObject> = {
  [key in keyof Type]: InstanceType<Type[key]>
};
export type TObjectRead = Required<TDocument>;
export type TObjectDelete = Required<TDocument>;
export type TObjectCreate
<Type extends TObject<TBaseObject>> = Partial<Type>;
export type TObjectUpdate
<Type extends TObject<TBaseObject>> = Required<TDocument> & Partial<Type>;
