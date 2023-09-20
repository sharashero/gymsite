function defaultDate() {
  return new Date();
}


function formatDate(value: Date) {
  return value.toLocaleDateString();
}


export function dateField(
  getDefault: () => Date = defaultDate,
  format: (value: Date) => string = formatDate,
) {
  return {
    getDefault,
    format,
  };
}
