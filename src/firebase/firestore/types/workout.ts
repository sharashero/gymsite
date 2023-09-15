import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TWorkoutDetails = {
  sets: number;
  rest: number;
  tempo: string;
  reps?: number;
  wieght?: number;
  duration?: number;
}


type TWorkout = {
  name: string;
  short: string;
  video: string;
  description: string;
  trainingSet: string;
  details: TWorkoutDetails;
  progress: TWorkoutDetails;
};


export type TWorkoutRead = TObjectRead;
export type TWorkoutDelete = TObjectDelete;
export type TWorkoutCreate = TObjectCreate<TWorkout>;
export type TWorkoutUpdate = TObjectUpdate<TWorkout>;
