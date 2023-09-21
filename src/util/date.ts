export function dateToInput(date: Date) {
  return date.toISOString().slice(0, 10);
}


export function toDateString(date: Date) {
  return date.toLocaleDateString("en-UK")
    .split("/")
    .map(entry => entry.padStart(2, "0"))
    .join("/");
}
