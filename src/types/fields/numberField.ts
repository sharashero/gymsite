function defaultNumber() {
  return 0;
}


function formatNumber(value: number) {
  return String(value);
}


export function numberField(
  getDefault: () => number = defaultNumber,
  format: (value: number) => string = formatNumber,
) {
  return {
    getDefault,
    format,
    type: "number",
  };
}
