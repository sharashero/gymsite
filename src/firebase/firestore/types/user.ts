import {
  TObject,
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


const User = {
  name: String,
  role: String,
  email: String,
  photoURL: String,
  height: Number,
  dateOfBirth: Date,
  phoneNumber: String,
};


export type TUser = TObject<typeof User>;
export type TUserRead = TObjectRead;
export type TUserDelete = TObjectDelete;
export type TUserCreate = TObjectCreate<TUser>;
export type TUserUpdate = TObjectUpdate<TUser>;
