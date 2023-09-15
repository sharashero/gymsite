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
} from "./types/subscription";


export function createSub(userId: string, sub: TSubscsriptionCreate) {
  createDocument<TSubscsriptionCreate>("users", [
    userId, "susbscriptions"
  ], sub);
}


export function readSub(userId: string, sub: TSubscsriptionRead) {
  readDocument<TSubscsriptionRead>("users", [
    userId, "susbscriptions",  sub.id
  ]);
}


export function updateSub(userId: string, sub: TSubscsriptionUpdate) {
  updateDocument<TSubscsriptionUpdate>("users", [
    userId, "susbscriptions",  sub.id
  ], sub);
}


export function deleteSub(userId: string, sub: TSubscsriptionDelete) {
  deleteDocument<TSubscsriptionDelete>("users", [
    userId, "susbscriptions",  sub.id
  ]);
}