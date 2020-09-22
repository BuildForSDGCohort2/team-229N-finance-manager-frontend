export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getTotal = (ar: number[]): number => {
  return ar.reduce((a: number, b: number) => a + b, 0);
};
