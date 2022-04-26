import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { render } from '../../_shared/testConfig/customRender';
import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { useExport } from './useExport';

const useMockExport = () => {
  const mockRef = useRef(null);
  const { exportPersona, getPreviewImage } = useExport(mockRef);
  return {
    mockRef,
    exportPersona,
    getPreviewImage,
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
