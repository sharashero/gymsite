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
  return createDocument<TPaymentCreate>("users", [
    userId, "payments"
  ], payment);
}


export function readPayment(userId: string, payment: TPaymentRead) {
  return readDocument<TPaymentRead>("users", [
    userId, "payments", payment.id
  ]);
}


export function updatePayment(userId: string, payment: TPaymentUpdate) {
  return updateDocument<TPaymentUpdate>("users", [
    userId, "payments", payment.id
  ], payment);
}


export function deletePayment(userId: string, payment: TPaymentDelete) {
  return deleteDocument<TPaymentDelete>("users", [
    userId, "payments", payment.id
  ]);
}
