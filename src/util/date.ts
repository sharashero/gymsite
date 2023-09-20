export function dateToInput(date: Date) {
  return date.toISOString().slice(0, 10);
}
