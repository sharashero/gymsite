import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";
import {
  TField,
  TFieldData,
  dateField,
  numberField
} from "./fields";


type TReadingFields = [
  TField<"timestamp", Date>,
  TField<"weight", number>,
  TField<"fatPercent", number>,
  TField<"fatMass", number>,
  TField<"muscleMass", number>,
];


type TReading = TFieldData<TReadingFields>;


export type TReadingRead = TObjectRead;
export type TReadingDelete = TObjectDelete;
export type TReadingCreate = TObjectCreate<TReading>;
export type TReadingUpdate = TObjectUpdate<TReading>;


export const readingFields: TReadingFields = [
  { name: "Date", key: "timestamp", ...dateField() },
  { name: "Weight", key: "weight", ...numberField() },
  { name: "Fat %", key: "fatPercent", ...numberField() },
  { name: "Fat Mass", key: "fatMass", ...numberField() },
  { name: "Muscle Mass", key: "muscleMass", ...numberField() },
];
