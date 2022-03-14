import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { BuilderState } from '../store/types';
import { useMultipleAttributeField } from './useMultipleAttributeField';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['1'],
  byId: {
    '1': {
      attributes: {
        progress: {
          initialValue: [{ id: 'anyId', value: 'anyValue', label: 'anyLabel' }],
          items: [{ id: 'anyId', value: 'anyValue', label: 'anyLabel' }],
          label: 'auth.form.textForSignup' as never,
          placeholder: 'auth.form.buttonLogin' as never,
          style: {},
        },
      },
      style: {},
      type: 'text',
    },
  },
  pageSettings: [],
};

describe('useMultipleAttributeField hook', () => {
  test('if onChangeLabel is called, label of select item should be change', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField('1', 'progress'),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
          },
        },
      },
    );

    act(() => result.current.onChangeLabel('anyId', 'test'));

    if (result.current.attributeItems) {
      expect(result.current.attributeItems[0].label).toBe('test');
    }
  });

  test('if onChangeLabel is called and item does not exist, label of select item should be equal', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField('1', 'progress'),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
          },
        },
      },
    );

    act(() => result.current.onChangeLabel('nonexistentId', 'test'));

    if (result.current.attributeItems) {
      expect(result.current.attributeItems[0].label).toBe('anyLabel');
    }
  });

  test('if onChangeValue is called, value of select item should be change', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField('1', 'progress'),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
          },
        },
      },
    );

    act(() => result.current.onChangeValue('anyId', 'test'));

    if (result.current.attributeItems) {
      expect(result.current.attributeItems[0].value).toBe('test');
    }
  });

  test('if onChangeValue is called and item does not exist, value of select item should be equal', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField('1', 'progress'),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
          },
        },
      },
    );

    act(() => result.current.onChangeValue('nonexistentId', 'test'));

    if (result.current.attributeItems) {
      expect(result.current.attributeItems[0].value).toBe('anyValue');
    }
  });

  test('if add is called, item should be add to Items', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField('1', 'progress'),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
          },
        },
      },
    );

    act(() => result.current.addItem('labelTest'));

    if (result.current.attributeItems) {
      expect(result.current.attributeItems[1].label).toBe('labelTest');
    }
  });
  test('if deleteItem is called, item should be delete to Items', () => {
    const { result } = renderHook(
      () => useMultipleAttributeField('1', 'progress'),
      {
        mocks: {
          builder: {
            ...MOCK_BUILDER_STATE,
          },
        },
      },
    );

    act(() => result.current.deleteItem('anyId'));

    if (result.current.attributeItems) {
      expect(result.current.attributeItems).not.toContain({
        id: 'anyId',
        value: 'anyValue',
        label: 'anyLabel',
      });
    }
  });
});
