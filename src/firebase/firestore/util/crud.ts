import {
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { TDocument } from "../types/common";
import { createConverter } from "./converter";


export async function createDocument
<Type extends TDocument>
(path: string, pathSegments: string[], document: Type) {
  const ref = collection(
    getFirestore(),
    path,
    ...pathSegments
  ).withConverter(createConverter<Type>());
  return addDoc(ref, document);
}


export async function readDocument
<Type extends TDocument>
(path: string, pathSegments: string[]) {
  const ref = doc(
    getFirestore(),
    path,
    ...pathSegments
  ).withConverter(createConverter<Type>());
  return (await getDoc(ref)).data();
}


export async function updateDocument
<Type extends TDocument>
(path: string, pathSegments: string[], document: Type) {
  const ref = doc(
    getFirestore(),
    path,
    ...pathSegments
  ).withConverter(createConverter<Type>());
  return updateDoc(ref, document);
}


export async function deleteDocument
<Type extends TDocument>
(path: string, pathSegments: string[]) {
  const ref = doc(
    getFirestore(),
    path,
    ...pathSegments
  ).withConverter(createConverter<Type>());
  return deleteDoc(ref);
}
