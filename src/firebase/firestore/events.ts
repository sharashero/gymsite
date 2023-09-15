import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} from "./util/crud";
import {
  TEventCreate,
  TEventRead,
  TEventUpdate,
  TEventDelete,
} from "./types/event";


export function createEvent(event: TEventCreate) {
  return createDocument<TEventCreate>("events", [], event);
}


export function readEvent(event: TEventRead) {
  return readDocument<TEventRead>("events", [event.id]);
}


export function updateEvent(event: TEventUpdate) {
  return updateDocument<TEventUpdate>("events", [event.id], event);
}


export function deleteEvent(event: TEventDelete) {
  return deleteDocument<TEventDelete>("events", [event.id]);
}
