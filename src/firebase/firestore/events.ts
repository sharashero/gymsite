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
  createDocument<TEventCreate>("events", [], event);
}


export function readEvent(event: TEventRead) {
  readDocument<TEventRead>("events", [event.id]);
}


export function updateEvent(event: TEventUpdate) {
  updateDocument<TEventUpdate>("events", [event.id], event);
}


export function deleteEvent(event: TEventDelete) {
  deleteDocument<TEventDelete>("events", [event.id]);
}
