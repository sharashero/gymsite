import {
  Timestamp,
  QueryDocumentSnapshot,
  FirestoreDataConverter,
  DocumentData,
} from "firebase/firestore";
import { TDocument } from "../types/common";


function toFirestore
<Type extends TDocument>
(modelObject: Type): DocumentData {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = modelObject;

  for (const key of Object.keys(rest)) {
    if (rest[key] === undefined) {
      delete rest[key];
    }
  }

  return rest;
}


function fromFirestore
<Type extends TDocument>
(snapshot: QueryDocumentSnapshot) {
  const data = snapshot.data();

  for (const key of Object.keys(data)) {
    const value = data[key];
    if (value instanceof Timestamp) {
      data[key] = value.toDate();
    }
  }

  return {
    id: snapshot.id,
    ...data
  } as Type;
}


export function createConverter
<Type extends TDocument>
(): FirestoreDataConverter<Type> {
  return {
    toFirestore: toFirestore<Type>,
    fromFirestore: fromFirestore<Type>,
  };
}
