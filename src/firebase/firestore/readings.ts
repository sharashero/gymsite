import { useMemo } from "react";
import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TReadingCreate,
  TReadingRead,
  TReadingUpdate,
  TReadingDelete,
} from "../../types/reading";
import { useCollectionSnapshot } from "./util/snapshot";


export function createReading(userId: string, cycle: TReadingCreate) {
  return createDocument<TReadingCreate>("users", [
    userId, "readings"
  ], cycle);
}


export function readReading(userId: string, cycle: TReadingRead) {
  return readDocument<TReadingRead>("users", [
    userId, "readings", cycle.id
  ]);
}


export function updateReading(userId: string, cycle: TReadingUpdate) {
  return updateDocument<TReadingUpdate>("users", [
    userId, "readings", cycle.id
  ], cycle);
}


export function deleteReading(userId: string, cycle: TReadingDelete) {
  return deleteDocument<TReadingDelete>("users", [
    userId, "readings", cycle.id
  ]);
}


export function useReadings(userdId: string) {
  const path = useMemo(() => [userdId, "readings"], [userdId]);
  return useCollectionSnapshot<TReadingUpdate>("users", path);
}
