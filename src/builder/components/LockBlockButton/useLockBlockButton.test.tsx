import { Layout } from 'react-grid-layout';
import { useSelector } from 'react-redux';
import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { getSingleLayout } from '../../store/selectors/getSingleLayout';
import { BuilderState } from '../../store/types';
import { useLockBlockButton } from './useLockBlockButton';

const EXISTING_ID = 'existingId';
const EXISTING_LAYOUT: Layout = {
  i: EXISTING_ID,
  h: 1,
  w: 1,
  x: 1,
  y: 1,
  isDraggable: true,
  isResizable: true,
};

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings,
  },
  pageSettings: [EXISTING_LAYOUT],
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
};

const useMockHook = () => {
  const selectedBlock = useSelector(getSingleLayout(EXISTING_ID));
  const { toggleLockBlock } = useLockBlockButton({
    id: EXISTING_ID,
    iconColor: 'anyColor',
  });

  return {
    selectedBlock,
    toggleLockBlock,
  };
};

describe('useLockBlockButton hook', () => {
  test('if toggleLockBlock is called, isDraggable and isResizable select layout should be change', async () => {
    const { result } = renderHook(() => useMockHook(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
    const { selectedBlock, toggleLockBlock } = result.current;

    render(<button onClick={toggleLockBlock} data-testid="button" />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    waitFor(() => {
      expect(selectedBlock?.isDraggable).toBeFalsy();
      expect(selectedBlock?.isResizable).toBeFalsy();
    });
  });
});
