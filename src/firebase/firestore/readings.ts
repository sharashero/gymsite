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


export function createReading(userId: string, reading: TReadingCreate) {
  return createDocument<TReadingCreate>("users", [
    userId, "readings"
  ], reading);
}


export function readReading(userId: string, reading: TReadingRead) {
  return readDocument<TReadingRead>("users", [
    userId, "readings", reading.id
  ]);
}


export function updateReading(userId: string, reading: TReadingUpdate) {
  return updateDocument<TReadingUpdate>("users", [
    userId, "readings", reading.id
  ], reading);
}


export function deleteReading(userId: string, reading: TReadingDelete) {
  return deleteDocument<TReadingDelete>("users", [
    userId, "readings", reading.id
  ]);
}


export function useReadings(userdId: string) {
  const path = useMemo(() => [userdId, "readings"], [userdId]);
  return useCollectionSnapshot<TReadingUpdate>("users", path);
}
