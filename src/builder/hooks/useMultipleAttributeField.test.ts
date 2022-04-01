import {
  renderHook,
  act,
  waitFor,
} from '../../_shared/testConfig/customRenderHook';
import { BuilderState } from '../store/types';
import { useMultipleAttributeField } from './useMultipleAttributeField';

const BLOCK_ID = 'anyBlockId';
const ITEM_ID = 'anyItemId';
const ATTRIBUTE_NAME = 'progress';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [BLOCK_ID],
  byId: {
    [BLOCK_ID]: {
      attributes: {
        [ATTRIBUTE_NAME]: {
          initialValue: [{ id: ITEM_ID, value: 'anyValue', label: 'anyLabel' }],
          items: [
            { id: ITEM_ID, value: 'anyValue', label: 'anyLabel' },
            { id: '2', value: 'anyValue', label: 'anyLabel' },
          ],
          label: 'builder.toolBar.attributes.items.label',
          placeholder: 'builder.toolBar.attributes.items.placeholder',
          style: {},
        },
      },
      style: {},
      type: ATTRIBUTE_NAME,
    },
  },
  pageSettings: [],
  personaId: 'any id',
  title: 'any title'
};

describe('useMultipleAttributeField hook', () => {
  test('if onChangeLabel is called, label of select item should be change', async () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    act(() => result.current.onChangeLabel(ITEM_ID, 'any new label'));
    await waitFor(() => {
      expect(result.current.attributeItems?.[0].label).toBe('any new label');
    });
  });

  test('if onChangeLabel is called and item does not exist, label of select item should be equal', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    act(() => result.current.onChangeLabel('nonexistentId', 'any new value'));

    expect(result.current.attributeItems?.[0].label).not.toBe('any new value');
  });

  test('if onChangeValue is called, value of select item should be change', async () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    act(() => result.current.onChangeValue(ITEM_ID, 'any new value'));

    await waitFor(() => {
      expect(result.current.attributeItems?.[0].value).toBe('any new value');
    });
  });

  test('if onChangeValue is called and item does not exist, value of select item should be equal', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    act(() => result.current.onChangeValue('nonexistentId', 'any new value'));

    expect(result.current.attributeItems?.[0].value).not.toBe('any new value');
  });

  test('if add is called, item should be add to Items', async () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    act(() => result.current.addItem('new item label', '30'));
    await waitFor(() => {
      expect(result.current.attributeItems?.[2].label).toBe('new item label');
    });
  });

  test('if deleteItem is called and more than one item exists, item should be deleted', async () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );

    act(() => result.current.deleteItem(ITEM_ID));

    await waitFor(() => {
      expect(result.current.attributeItems?.[1]).toBeUndefined();
    });
  });
  test('if deleteItem is called and only one item exists, item should be deleted', async () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      {
        mocks: {
          builder: {
            allIds: [BLOCK_ID],
            byId: {
              [BLOCK_ID]: {
                attributes: {
                  [ATTRIBUTE_NAME]: {
                    initialValue: [
                      { id: ITEM_ID, value: 'anyValue', label: 'anyLabel' },
                    ],
                    items: [
                      { id: ITEM_ID, value: 'anyValue', label: 'anyLabel' },
                    ],
                    label: 'builder.toolBar.attributes.items.label',
                    placeholder: 'builder.toolBar.attributes.items.placeholder',
                    style: {},
                  },
                },
                style: {},
                type: ATTRIBUTE_NAME,
              },
            },
            pageSettings: [],
            personaId: 'any id',
            title: 'any title'
          },
        },
      },
    );

    act(() => result.current.deleteItem(ITEM_ID));

    await waitFor(() => {
      expect(result.current.attributeItems?.[0]).not.toBeUndefined();
    });
  });

  test('if store attribute is undefined should return defined label and placeholder values', async () => {
    const { result } = renderHook(
      () => useMultipleAttributeField(BLOCK_ID, ATTRIBUTE_NAME),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
            byId: {
              [BLOCK_ID]: {
                ...MOCK_BUILDER_STATE.byId[BLOCK_ID],
                attributes: {},
              },
            },
          },
        },
      },
    );

    expect(result.current.label).toBeDefined();
    expect(result.current.placeholder).toBeDefined();
  });
});
