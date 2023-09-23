import { useMemo } from "react";
import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TSubscsriptionCreate,
  TSubscsriptionRead,
  TSubscsriptionUpdate,
  TSubscsriptionDelete,
} from "../../types/subscription";
import { useCollectionSnapshot } from "./util/snapshot";


export function createSub(userId: string, sub: TSubscsriptionCreate) {
  return createDocument<TSubscsriptionCreate>("users", [
    userId, "subscriptions"
  ], sub);
}


export function readSub(userId: string, sub: TSubscsriptionRead) {
  return readDocument<TSubscsriptionRead>("users", [
    userId, "subscriptions", sub.id
  ]);
}


export function updateSub(userId: string, sub: TSubscsriptionUpdate) {
  return updateDocument<TSubscsriptionUpdate>("users", [
    userId, "subscriptions", sub.id
  ], sub);
}


export function deleteSub(userId: string, sub: TSubscsriptionDelete) {
  return deleteDocument<TSubscsriptionDelete>("users", [
    userId, "subscriptions", sub.id
  ]);
}


export function useSubscriptions(userId: string) {
  const path = useMemo(() => [userId, "subscriptions"], [userId]);
  return useCollectionSnapshot<TSubscsriptionUpdate>("users", path).map(
    sub => {
      sub.checkIns?.sort(
        (a, b) => (b?.getTime() || 0) - (a?.getTime() || 0)
      );
      return sub;
    }
  ).sort(
    (a, b) => (b.start?.getTime() || 0) - (a.start?.getTime() || 0)
  );
}
