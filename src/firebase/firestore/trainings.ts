import { useMemo } from "react";
import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TTrainingCreate,
  TTrainingRead,
  TTrainingUpdate,
  TTrainingDelete,
} from "../../types/training";
import { useCollectionSnapshot } from "./util/snapshot";


export function createTraining(
  userId: string, cycleId: string, training: TTrainingCreate
) {
  return createDocument<TTrainingCreate>("users", [
    userId, "cycles", cycleId, "trainings"
  ], training);
}


export function readTraining(
  userId: string, cycleId: string, training: TTrainingRead
) {
  return readDocument<TTrainingRead>("users", [
    userId, "cycles", cycleId, "trainings", training.id
  ]);
}


export function updateTraining(
  userId: string, cycleId: string, training: TTrainingUpdate
) {
  return updateDocument<TTrainingUpdate>("users", [
    userId, "cycles", cycleId, "trainings", training.id
  ], training);
}


export function deleteTraining(
  userId: string, cycleId: string, training: TTrainingDelete
) {
  return deleteDocument<TTrainingDelete>("users", [
    userId, "cycles", cycleId, "trainings", training.id
  ]);
}


export function useTrainings(userdId: string, cycleId: string) {
  const path = useMemo(() => [
    userdId,
    "cycles", cycleId,
    "trainings"
  ], [userdId, cycleId]);
  return useCollectionSnapshot<TTrainingUpdate>("users", path).sort(
    (a, b) => (b.timestamp?.getTime() || 0) - (a.timestamp?.getTime() || 0)
  );
}
