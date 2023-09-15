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
} from "./types/user";


export function createUser(user: TUserCreate) {
  createDocument<TUserCreate>("users", [], user);
}


export function readUser(user: TUserRead) {
  readDocument<TUserRead>("users", [user.id]);
}


export function updateUser(user: TUserUpdate) {
  updateDocument<TUserUpdate>("users", [user.id], user);
}


export function deleteUser(user: TUserDelete) {
  deleteDocument<TUserDelete>("users", [user.id]);
}
