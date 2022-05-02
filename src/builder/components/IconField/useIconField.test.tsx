import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { AttributeName } from '../../store/types';
import { SelectIconType } from '../StyleFields/SelectIconType';
import { useIconField } from './useIconField';

type Params = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};

const MOCK_HOOK_PARAMS: Params = {
  attributeName: 'rate',
  blockItemId: '1',
  styleKey: 'icon',
};

describe('useIconField', () => {
  test(' selected should change when call select()', async () => {
    const { result } = renderHook(() => useIconField(MOCK_HOOK_PARAMS), {
      mocks: {
        builder: {
          allIds: ['1'],
          byId: {
            '1': {
              attributes: {
                title: {
                  initialValue: [{ id: 'test', value: 'test' }],
                  items: [{ id: 'test', value: 'test' }],
                  label: 'builder.toolBar.attributes.items.label',
                  placeholder: 'builder.toolBar.attributes.default.placeholder',
                  style: {},
                },
                rate: {
                  initialValue: [{ id: 'test', value: '4' }],
                  items: [{ id: 'test', value: '2' }],
                  label: 'builder.toolBar.attributes.items.label',
                  placeholder: 'builder.toolBar.attributes.items.placeholder',
                  style: { icon: 'Heart' },
                },
              },
              style: {},
              type: 'text',
            },
          },
          pageSettings: [],
          entityId: 'any id',
          entityType: 'persona',
          title: 'any title',
          globalStyle: {
            backgroundColor: '',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
        },
      },
    });
    render(
      <SelectIconType
        icons={result.current.icons}
        label={result.current.label}
        selected={result.current.selected}
        onChange={e => result.current.select(e)}
      />,
    );
    const select = screen.getByTestId('select');
    userEvent.selectOptions(select, 'Smile');

    await waitFor(() => {
      expect(result.current.selected).toBe('Smile');
    });
  });
});
