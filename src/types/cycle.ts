import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TCycle = {
  name: string;
  timestamp: Date;
  trainings: string[];
};


export type TCycleRead = TObjectRead;
export type TCycleDelete = TObjectDelete;
export type TCycleCreate = TObjectCreate<TCycle>;
export type TCycleUpdate = TObjectUpdate<TCycle>;
