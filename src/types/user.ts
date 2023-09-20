import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TUser = {
  name: string;
  role: string;
  email: string;
  photoURL: string;
  height: number;
  dateOfBirth: Date;
  phoneNumber: string;
};


export type TUserRead = TObjectRead;
export type TUserDelete = TObjectDelete;
export type TUserCreate = TObjectCreate<TUser>;
export type TUserUpdate = TObjectUpdate<TUser>;
