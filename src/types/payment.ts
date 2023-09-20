import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";
import {
  dateField,
  numberField,
  TField,
  TFieldData,
} from "./fields";


type TPaymentFields = [
  TField<"timestamp", Date>,
  TField<"amount", number>,
];

export type TPayment = TFieldData<TPaymentFields>;

export type TPaymentRead = TObjectRead;
export type TPaymentDelete = TObjectDelete;
export type TPaymentCreate = TObjectCreate<TPayment>;
export type TPaymentUpdate = TObjectUpdate<TPayment>;

export const paymentFields: TPaymentFields = [
  { name: "Date", key: "timestamp", ...dateField() },
  { name: "Amount", key: "amount", ...numberField(undefined, (v) => `${v} LE`) },
];
