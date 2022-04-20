import { useRef } from 'react';
import { render } from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { ExportButton } from './ExportButton';

const useMockRef = () => {
  const mockRef = useRef(null);
  return {
    mockRef,
  };
};

describe('ExportButton component', () => {
  test('Should be rendered', () => {
    const { result } = renderHook(() => useMockRef());
    render(<ExportButton exportItemRef={result.current.mockRef} />);
  });
});
