import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TSubscsription = {
  start: Date;
  end: Date;
  nOfSessions: number;
  checkIns: Date[];
};


export type TSubscsriptionRead = TObjectRead;
export type TSubscsriptionDelete = TObjectDelete;
export type TSubscsriptionCreate = TObjectCreate<TSubscsription>;
export type TSubscsriptionUpdate = TObjectUpdate<TSubscsription>;
