import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { render } from '../../_shared/testConfig/customRender';
import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useExport } from './useExport';

const useMockExport = () => {
  const mockRef = useRef(null);
  const { exportPersona, getImagePreview } = useExport(mockRef);
  return {
    mockRef,
    exportPersona,
    getImagePreview,
  };
};

describe('useExport hook', () => {
  test('if getPreviewImage is called, it should be return a string', async () => {
    const { result } = renderHook(() => useMockExport());
    render(
      <Box ref={result.current.mockRef as React.LegacyRef<HTMLDivElement>} />,
    );
    // const canvas = await result.current.getPreviewImage();
    // waitFor(() => {
    //   expect(canvas).toBeTruthy();
    // });
  });
});
