import { useCallback, useEffect, useState } from 'react';
import { gridSettings } from '../config/styleSettings/globals';
import { GlobalStyle } from '../store/types';
import { calculateRowHeight } from '../store/utils/calculateRowHeight';

export const useRowHeight = (globalStyle: GlobalStyle) => {
  const getActualRowHeight = useCallback(() => {
    return calculateRowHeight({
      paddingY: globalStyle.containerPaddingY,
      pageHeight: gridSettings.pageHeight,
      rowGap: globalStyle.rowGap,
      rowsNumber: gridSettings.rowsNumber,
    });
  }, [globalStyle.rowGap, globalStyle.containerPaddingY]);

  const [rowHeight, setRowHeight] = useState<number>(getActualRowHeight());

  useEffect(() => {
    setRowHeight(getActualRowHeight());
  }, [getActualRowHeight]);

  return {
    rowHeight,
  };
};
