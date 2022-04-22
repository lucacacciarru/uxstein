import { useSelector } from 'react-redux';
import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { getPageSettings } from '../../store/selectors/getPageSettings';
import { BuilderState } from '../../store/types';
import { useDeleteBlockButton } from './useDeleteBlockButton';

const EXISTING_ID = 'existingId';
const EXISTING_LAYOUT = { i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 };

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

const useCustomHook = () => {
  const pageSettings = useSelector(getPageSettings);
  const { handlerDeleteButton } = useDeleteBlockButton(EXISTING_ID);
  return {
    pageSettings,
    handlerDeleteButton,
  };
};

describe('useDeleteBlockButton hook', () => {
  test('if handlerDeleteButton is called, selected item should be delete', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
    const { handlerDeleteButton, pageSettings } = result.current;
    render(<button data-testid="button" onClick={handlerDeleteButton} />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(pageSettings).not.toContain(EXISTING_LAYOUT);
  });
});
