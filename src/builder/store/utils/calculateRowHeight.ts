type Params = {
  pageHeight: number;
  paddingY: number;
  rowGap: number;
  rowsNumber: number;
};

export const calculateRowHeight = (params: Params) => {
  const totalPadding = params.paddingY * 2;
  const totalGap = params.rowGap * (params.rowsNumber - 1);
  return (params.pageHeight - totalPadding - totalGap) / params.rowsNumber;
};
