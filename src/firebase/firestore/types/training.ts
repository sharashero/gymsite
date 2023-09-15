import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TTrainingSet = {
  name: string;
  workouts: string[];
}


type TTraining = {
  name: string;
  timestamp: Date;
  trainingSets: TTrainingSet[];
};


export type TTrainingRead = TObjectRead;
export type TTrainingDelete = TObjectDelete;
export type TTrainingCreate = TObjectCreate<TTraining>;
export type TTrainingUpdate = TObjectUpdate<TTraining>;
