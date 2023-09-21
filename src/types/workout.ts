import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";
import {
  TField,
  TFieldData,
  objectField,
  numberField,
  stringField,
} from "./fields";


type TWorkoutDetailsFields = [
  TField<"sets", number>,
  TField<"rest", number>,
  TField<"tempo", string>,
  TField<"reps", number>,
  TField<"weight", number>,
  TField<"duration", number>,
];

export type TWorkoutDetails = TFieldData<TWorkoutDetailsFields>;


type TWorkoutFields = [
  TField<"name", string>,
  TField<"short", string>,
  TField<"video", Partial<string>>,
  TField<"description", Partial<string>>,
  TField<"trainingSet", string>,
  TField<"details", Partial<TWorkoutDetails>>,
  TField<"progress", Partial<TWorkoutDetails>>,
];

export type TWorkout = TFieldData<TWorkoutFields>;


export type TWorkoutRead = TObjectRead;
export type TWorkoutDelete = TObjectDelete;
export type TWorkoutCreate = TObjectCreate<TWorkout>;
export type TWorkoutUpdate = TObjectUpdate<TWorkout>;


export const workoutFields: TWorkoutFields = [
  { name: "Name", key: "name", ...stringField() },
  { name: "Short Name", key: "short", ...stringField() },
  { name: "Video", key: "video", ...stringField() },
  { name: "Description", key: "description", ...stringField() },
  { name: "Training Set", key: "trainingSet", ...stringField() },
  { name: "Details", key: "details", ...objectField() },
  { name: "Progress", key: "progress", ...objectField() },
];


export const workoutDetailsFields: TWorkoutDetailsFields = [
  { name: "Sets", key: "sets", ...numberField() },
  { name: "Rest", key: "rest", ...numberField() },
  { name: "Tempo", key: "tempo", ...stringField() },
  { name: "Reps", key: "reps", ...numberField() },
  { name: "Weight", key: "weight", ...numberField() },
  { name: "Duration", key: "duration", ...numberField() },
];
