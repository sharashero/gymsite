import { useMemo, useState, useEffect } from "react";
import {
  doc,
  query,
  collection,
  onSnapshot,
  getFirestore,
  QueryConstraint,
} from "firebase/firestore";
import { TDocument } from "../types/common";
import { createConverter } from "./converter";


export function useDocumentSnapshot
<Type extends TDocument>
(path: string, pathSegments: string[]) {
  const [snapshot, setSnapshot] = useState<Type>();
  const ref = useMemo(() => (
    doc(
      getFirestore(),
      path,
      ...pathSegments
    ).withConverter(createConverter<Type>())
  ), [path, pathSegments]);

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, snap => {
      setSnapshot(snap.data());
    });

    return unsubscribe;
  }, [ref]);

  return snapshot;
}


export function useCollectionSnapshot
<Type extends TDocument>
(path: string, pathSegments: string[]) {
  const [snapshot, setSnapshot] = useState<Type[]>([]);
  const ref = useMemo(() => (
    collection(
      getFirestore(),
      path,
      ...pathSegments
    ).withConverter(createConverter<Type>())
  ), [path, pathSegments]);

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, snap => {
      setSnapshot(snap.docs.map(doc => doc.data()));
    });

    return unsubscribe;
  }, [ref]);

  return snapshot;
}


export function useQuerySnapshot
<Type extends TDocument>
(path: string, pathSegments: string[], ...constraints: QueryConstraint[]) {
  const [snapshot, setSnapshot] = useState<Type[]>([]);
  const ref = useMemo(() => (
    query(
      collection(getFirestore(), path, ...pathSegments),
      ...constraints
    ).withConverter(createConverter<Type>())
  ), [path, pathSegments, constraints]);

  useEffect(() => {
    const unsubscribe = onSnapshot(ref, snap => {
      setSnapshot(snap.docs.map(doc => doc.data()));
    });

    return unsubscribe;
  }, [ref]);

  return snapshot;
}
