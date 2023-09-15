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
} from "./types/training";


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
