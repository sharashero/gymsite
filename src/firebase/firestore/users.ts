import { useMemo } from "react";
import { where } from "firebase/firestore";
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
import {
  useQuerySnapshot,
  useDocumentSnapshot,
} from "./util/snapshot";


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


export function useUserSnapshot(userId: string) {
  const path = useMemo(() => [userId], [userId]);
  return useDocumentSnapshot<TUserUpdate>("users", path) || {
    id: userId,
    name: "",
    email: "",
    photoURL: "",
    phoneNumber: "",
    dateOfBirth: new Date(),
  };
}


export function useUserByRole(role: string) {
  const allUsers = useMemo(() => [], []);
  const constraints = useMemo(() => {
    const wheres = [where("role", "!=", "admin")];
    if (role) {
      wheres.push(where("role", "==", role));
    }

    return wheres;
  }, [role]);

  return useQuerySnapshot<TUserUpdate>(
    "users", allUsers, constraints
  );
}
