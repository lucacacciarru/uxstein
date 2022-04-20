import { useRef } from 'react';
import { render } from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { useBlockSetup } from '../../hooks/useBlockSetup';
import { BuilderState } from '../../store/types';
import { DroppablePage } from './DroppablePage';
const EXISTING_ID = 'existingId';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: { attributes: {}, style: {}, type: 'text' },
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
};

const useMockRef = () => {
  const mockRef = useRef(null);
  return {
    mockRef,
  };
};

describe('DroppablePage', () => {
  test('should render correctly', () => {
    const { result } = renderHook(() => useBlockSetup());
    const { result: mockRefResult } = renderHook(() => useMockRef());
    render(
      <DroppablePage
        exportItemRef={mockRefResult.current.mockRef}
        blockSetup={result.current.blockSetup}
      />,
      {
        mocks: { builder: MOCK_BUILDER_STATE },
      },
    );
  });
});
