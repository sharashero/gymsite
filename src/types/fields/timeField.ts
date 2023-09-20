function defaultTime() {
  return new Date();
}


function formatTime(value: Date) {
  return value.toLocaleTimeString();
}


export function timeField(
  getDefault: () => Date = defaultTime,
  format: (value: Date) => string = formatTime,
) {
  return {
    getDefault,
    format,
  };
}
