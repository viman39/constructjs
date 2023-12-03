export const numberFormat = (value: string): number => {
  const res = (value ? parseFloat(value) : 0).toFixed(5);
  return parseFloat(res);
};
