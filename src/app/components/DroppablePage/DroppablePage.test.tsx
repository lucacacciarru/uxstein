import { render } from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useBlockSetup } from '../../hooks/useBlockSetup';
import { DroppablePage } from './DroppablePage';

describe('DroppablePage', () => {
  test('shoud render correctly', () => {
    const { result } = renderHook(() => useBlockSetup());
    render(<DroppablePage blockSetup={result.current.blockSetup} />);
  });
});
