import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TWorkoutCreate,
  TWorkoutRead,
  TWorkoutUpdate,
  TWorkoutDelete,
} from "../../types/workout";


export function createWorkout(
  userId: string,
  cycleId: string,
  trainingId: string,
  workout: TWorkoutCreate
) {
  return createDocument<TWorkoutCreate>("users", [
    userId, "cycles", cycleId, "trainings", trainingId, "workouts",
  ], workout);
}


export function readWorkout(
  userId: string,
  cycleId: string,
  trainingId: string,
  workout: TWorkoutRead
) {
  return readDocument<TWorkoutRead>("users", [
    userId, "cycles", cycleId, "trainings", trainingId, "workouts", workout.id
  ]);
}


export function updateWorkout(
  userId: string,
  cycleId: string,
  trainingId: string,
  workout: TWorkoutUpdate
) {
  return updateDocument<TWorkoutUpdate>("users", [
    userId, "cycles", cycleId, "trainings", trainingId, "workouts", workout.id
  ], workout);
}


export function deleteWorkout(
  userId: string,
  cycleId: string,
  trainingId: string,
  workout: TWorkoutDelete
) {
  return deleteDocument<TWorkoutDelete>("users", [
    userId, "cycles", cycleId, "trainings", trainingId, "workouts", workout.id
  ]);
}
