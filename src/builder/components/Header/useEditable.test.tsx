import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { useCustomEditable } from './useCustomEditable';

describe('useEditable', () => {
  const { result } = renderHook(() => useTranslation());
  const DEFAULT_NAME = result.current.t('builder.header.defaultFileName');

  test('should return value and defaultValue = "untitled" by default', () => {
    const { result } = renderHook(() => useCustomEditable());

    expect(result.current.editableProps.value).toBe(DEFAULT_NAME);
    expect(result.current.editableProps.defaultValue).toBe(DEFAULT_NAME);
  });

  test('should set value = "untitled" if try to submit no value', () => {
    const { result } = renderHook(() => useCustomEditable());

    act(() => result.current.editableProps.onSubmit(''));

    expect(result.current.editableProps.value).toBe(DEFAULT_NAME);
  });

  test('should set value if change with a valid value', () => {
    render(<EditableMock />);

    const editable = screen.getByDisplayValue(DEFAULT_NAME);
    fireEvent.change(editable, {
      target: { value: 'valid' },
    });

    expect(editable).toHaveValue('valid');
  });

  test('should show modal if write more than 20 char', () => {
    render(<EditableMock />);
    const { result } = renderHook(() => useTranslation());
    const maxCharMessage = result.current.t('builder.toast.maxCharacters');
    expect(screen.queryByText(maxCharMessage)).not.toBeInTheDocument();

    const editable = screen.getByDisplayValue(DEFAULT_NAME);
    fireEvent.change(editable, {
      target: { value: 'some string long more than 20 char' },
    });

    expect(screen.getByText(maxCharMessage)).toBeInTheDocument();
  });
});

const EditableMock: FC = () => {
  const { editableProps } = useCustomEditable();
  return (
    <Editable {...editableProps}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};
