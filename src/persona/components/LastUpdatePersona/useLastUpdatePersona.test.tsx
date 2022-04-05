import { useTranslation } from 'react-i18next';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useLastUpdatePersona } from './useLastUpdatePersona';

function useCustomHook(timeStamp: number) {
  const { t } = useTranslation();
  const { timeBetween } = useLastUpdatePersona(timeStamp);
  return { t, timeBetween };
}

describe('useLastUpdatePersona hook', () => {
  test('if timeBetween function result is greater than 30 (days), the personCard.timeEdit_more transition key will be returned.', () => {
    const { result } = renderHook(() => useCustomHook(0));
    expect(result.current.timeBetween).toBe(
      result.current.t('personCard.timeEdit_more'),
    );
  });
  test('if timeBetween function result is less than 30 (days), the personCard.timeEdit transition key will be returned.', () => {
    const { result } = renderHook(() => useCustomHook(Date.now()));
    expect(result.current.timeBetween).toBe(
      result.current.t('personCard.timeEdit', { count: 0 }),
    );
  });
});
