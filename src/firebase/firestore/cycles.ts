import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TCycleCreate,
  TCycleRead,
  TCycleUpdate,
  TCycleDelete,
} from "../../types/cycle";


export function createCycle(userId: string, cycle: TCycleCreate) {
  return createDocument<TCycleCreate>("users", [
    userId, "cycles"
  ], cycle);
}


export function readCycle(userId: string, cycle: TCycleRead) {
  return readDocument<TCycleRead>("users", [
    userId, "cycles", cycle.id
  ]);
}


export function updateCycle(userId: string, cycle: TCycleUpdate) {
  return updateDocument<TCycleUpdate>("users", [
    userId, "cycles", cycle.id
  ], cycle);
}


export function deleteCycle(userId: string, cycle: TCycleDelete) {
  return deleteDocument<TCycleDelete>("users", [
    userId, "cycles", cycle.id
  ]);
}
