import { useSelector } from 'react-redux';
import {
  renderHook,
  act,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { AttributeName, BuilderState } from '../../store/types';
import { useProgressBorderField } from './useProgressBorderField';

type Params = {
  styleKey: string;
  blockItemId: string;
  attributeToUpdate: AttributeName;
};

const EXISTING_ID = 'existingId';

const MOCK_HOOK_PARAMS: Params = {
  attributeToUpdate: 'progress',
  blockItemId: EXISTING_ID,
  styleKey: 'progressBarBorderWidth',
};

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: {
    existingId: {
      attributes: {
        progress: {
          initialValue: [{ id: 'test', value: 'test' }],
          items: [{ id: 'test', value: 'test' }],
          label: 'auth.form.textForSignup',
          placeholder: 'auth.form.buttonLogin',
          style: {
            progressBarBorderWidth: '0px',
          },
        },
      },
      style: {},
      type: 'text',
    },
  },
  pageSettings: [],
};

const useTestProgressBorderField = () => {
  const { select, selected, sizes } = useProgressBorderField(MOCK_HOOK_PARAMS);

  const storeBorderWidth = useSelector(getGridItemById(EXISTING_ID)).attributes
    .progress?.style.progressBarBorderWidth;

  return {
    select,
    selected,
    storeBorderWidth,
    sizes,
  };
};

describe('useProgressBorderField hook', () => {
  test('should update selected when call select()', async () => {
    const { result } = renderHook(() => useTestProgressBorderField(), {
      mocks: { builder: MOCK_BUILDER_STATE },
    });

    act(() => result.current.select('s'));
    expect(result.current.selected).toBe('s');
    await waitFor(() => {
      expect(result.current.storeBorderWidth).toBe(
        result.current.sizes[result.current.selected],
      );
    });
  });
});
