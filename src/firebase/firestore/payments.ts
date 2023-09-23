import { useMemo } from "react";
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
} from "../../types/payment";
import { useCollectionSnapshot } from "./util/snapshot";
import {
  query,
  where,
  getDocs,
  getFirestore,
  collectionGroup,
} from "firebase/firestore";


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


export function usePayments(userdId: string) {
  const path = useMemo(() => [userdId, "payments"], [userdId]);
  return useCollectionSnapshot<TPaymentUpdate>("users", path);
}


export async function getAllPayments(from: Date, to: Date) {
  const paymentsRef = query(
    collectionGroup(getFirestore(), "payments"),
    where("timestamp", ">=", from),
    where("timestamp", "<=", to),
  );
  const paymentsSnapshot = await getDocs(paymentsRef);

  return paymentsSnapshot.docs.map(document => {
    const data = document.data();

    return {
      id: document.id,
      amount: data.amount || 0,
      timestamp: data.timestamp?.toDate() || new Date(),
    };
  }).sort((a, b) => b.timestamp - a.timestamp);
}
