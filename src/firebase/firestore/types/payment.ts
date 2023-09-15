import {
  TObject,
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


const Payment = {
  amount: Number,
  timestamp: Date,
};


export type TPayment = TObject<typeof Payment>;
export type TPaymentRead = TObjectRead;
export type TPaymentDelete = TObjectDelete;
export type TPaymentCreate = TObjectCreate<TPayment>;
export type TPaymentUpdate = TObjectUpdate<TPayment>;
