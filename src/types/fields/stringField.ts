function defaultString() {
  return "";
}


function formatString(value: string) {
  return value;
}


export function stringField(
  getDefault: () => string = defaultString,
  format: (value: string) => string = formatString,
) {
  return {
    getDefault,
    format,
  };
}
