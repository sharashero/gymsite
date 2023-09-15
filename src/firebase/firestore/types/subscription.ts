import {
  TObject,
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


const Subscsription = {
  start: Date,
  end: Date,
  nOfSessions: Number,
  checkIns: Array<Date>,
};


export type TSubscsription = TObject<typeof Subscsription>;
export type TSubscsriptionRead = TObjectRead;
export type TSubscsriptionDelete = TObjectDelete;
export type TSubscsriptionCreate = TObjectCreate<TSubscsription>;
export type TSubscsriptionUpdate = TObjectUpdate<TSubscsription>;
