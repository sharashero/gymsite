import {
  TObjectCreate,
  TObjectRead,
  TObjectUpdate,
  TObjectDelete,
} from "./common";


type TPayment = {
  amount: number;
  timestamp: Date;
};


export type TPaymentRead = TObjectRead;
export type TPaymentDelete = TObjectDelete;
export type TPaymentCreate = TObjectCreate<TPayment>;
export type TPaymentUpdate = TObjectUpdate<TPayment>;
