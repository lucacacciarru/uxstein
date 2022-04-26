import { getContrast } from 'polished';
import { useMemo } from 'react';

export function useHandles(bg: string) {
  const containerBackgroundColor = useMemo(() => {
    const contrastRatio = getContrast(bg, '#fff');
    return contrastRatio < 1.95 ? 'black.0' : 'white.pure';
  }, [bg]);

  const iconColor = useMemo(() => {
    return containerBackgroundColor === 'black.0' ? 'white.pure' : 'black.0';
  }, [containerBackgroundColor]);

  return {
    containerBackgroundColor,
    iconColor,
  };
}
