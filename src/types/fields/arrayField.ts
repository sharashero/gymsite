function defaultArray(): [] {
  return [];
}


function formatArray(value: []) {
  return String(value.length);
}


export function arrayField(
  getDefault: () => [] = defaultArray,
  format: (value: []) => string = formatArray,
) {
  return {
    getDefault,
    format,
  };
}
