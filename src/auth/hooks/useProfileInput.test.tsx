import { Button } from '@chakra-ui/react';
import { render, screen } from '../../_shared/testConfig/customRender';
import { renderHook, waitFor } from '../../_shared/testConfig/customRenderHook';
import { useProfileInput } from './useProfileInput';

describe('useProfileInput hook', () => {
  test('if showToast is called, GenericComponent should be in the document', async () => {
    const { result } = renderHook(() =>
      useProfileInput({ toastText: 'builder.toast.personaSaved' }),
    );
    render(<Button onClick={result.current.showToast} />);
    waitFor(() => {
      const toast = screen.getByTestId('genericToast');
      expect(toast).toBeInTheDocument();
    });
  });
});
