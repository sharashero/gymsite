import {
  TObject,
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


const UserRegistration = {
  id: String,
  name: String,
  timestamp: Date,
};


export type TUserRegistration = TObject<typeof UserRegistration>;


const Event = {
  max: Number,
  view: Boolean,
  toTimestamp: Date,
  fromTimestamp: Date,
  registeredUsers: Array<TUserRegistration>,
};


export type TEvent = TObject<typeof Event>;
export type TEventRead = TObjectRead;
export type TEventDelete = TObjectDelete;
export type TEventCreate = TObjectCreate<TEvent>;
export type TEventUpdate = TObjectUpdate<TEvent>;
