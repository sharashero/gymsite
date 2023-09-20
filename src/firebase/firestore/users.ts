import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TUserCreate,
  TUserRead,
  TUserUpdate,
  TUserDelete,
} from "../../types/user";


export function createUser(user: TUserCreate) {
  return createDocument<TUserCreate>("users", [], user);
}


export function readUser(user: TUserRead) {
  return readDocument<TUserRead>("users", [user.id]);
}


export function updateUser(user: TUserUpdate) {
  return updateDocument<TUserUpdate>("users", [user.id], user);
}


export function deleteUser(user: TUserDelete) {
  return deleteDocument<TUserDelete>("users", [user.id]);
}
