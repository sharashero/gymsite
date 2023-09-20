import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";
import {
  dateField,
  timeField,
  arrayField,
  numberField,
  TField,
  TFieldData,
} from "./fields";


type TSubscsriptionFields = [
  TField<"start", Date>,
  TField<"end", Date>,
  TField<"checkIns", Date[]>,
  TField<"nOfSessions", number>,
];

export type TSubscsription = TFieldData<TSubscsriptionFields>;


export type TSubscsriptionRead = TObjectRead;
export type TSubscsriptionDelete = TObjectDelete;
export type TSubscsriptionCreate = TObjectCreate<TSubscsription>;
export type TSubscsriptionUpdate = TObjectUpdate<TSubscsription>;


export function mapCheckIns(checkIns: Date[]) {
  return checkIns.map(checkIn => ({
    id: checkIn.toISOString(),
    date: checkIn,
    time: checkIn,
  }));
}


export const subscriptionFields: TSubscsriptionFields = [
  { name: "Start", key: "start", ...dateField() },
  { name: "End", key: "end", ...dateField() },
  { name: "Check-ins", key: "checkIns", ...arrayField() },
  { name: "Sessions", key: "nOfSessions", ...numberField() },
];


export const checkInFields = [
  { name: "Date", key: "date", ...dateField() },
  { name: "Time", key: "time", ...timeField() },
];
