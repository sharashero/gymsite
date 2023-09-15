import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TPaymentCreate,
  TPaymentRead,
  TPaymentUpdate,
  TPaymentDelete,
} from "./types/payment";


export function createPayment(userId: string, payment: TPaymentCreate) {
  createDocument<TPaymentCreate>("users", [
    userId, "payments"
  ], payment);
}


export function readPayment(userId: string, payment: TPaymentRead) {
  readDocument<TPaymentRead>("users", [
    userId, "payments",  payment.id
  ]);
}


export function updatePayment(userId: string, payment: TPaymentUpdate) {
  updateDocument<TPaymentUpdate>("users", [
    userId, "payments",  payment.id
  ], payment);
}


export function deletePayment(userId: string, payment: TPaymentDelete) {
  deleteDocument<TPaymentDelete>("users", [
    userId, "payments",  payment.id
  ]);
}
