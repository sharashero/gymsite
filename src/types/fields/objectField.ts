function defaultObject<T>(): Partial<T> {
  return {};
}


function formatObject<T>(value: T) {
  return String(value);
}


export function objectField<T>(
  getDefault: () => Partial<T> = defaultObject<T>,
  format: (value: T) => string = formatObject<T>,
) {
  return {
    getDefault,
    format,
  };
}
