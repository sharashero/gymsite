import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TUserRegistration = {
  id: string;
  name: string;
  timestamp: Date;
};


type TEvent = {
  max: number;
  view: boolean;
  toTimestamp: Date;
  fromTimestamp: Date;
  registeredUsers: TUserRegistration[];
};


export type TEventRead = TObjectRead;
export type TEventDelete = TObjectDelete;
export type TEventCreate = TObjectCreate<TEvent>;
export type TEventUpdate = TObjectUpdate<TEvent>;
