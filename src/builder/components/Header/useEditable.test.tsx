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
  test('shoud return value and defaultValue = "untilted" by default', () => {
    const { result } = renderHook(() => useCustomEditable());

    expect(result.current.editableProps.value).toBe('untilted');
    expect(result.current.editableProps.defaultValue).toBe('untilted');
  });

  test('shoud set value = "untilted" if try to submit no value', () => {
    const { result } = renderHook(() => useCustomEditable());

    act(() => result.current.editableProps.onSubmit(''));

    expect(result.current.editableProps.value).toBe('untilted');
  });

  test('shoud set value if change with a valid value', () => {
    render(<EditableMock />);

    const editable = screen.getByDisplayValue('untilted');
    fireEvent.change(editable, {
      target: { value: 'valid' },
    });

    expect(editable).toHaveValue('valid');
  });

  test('shoud show modal if write more than 20 char', () => {
    render(<EditableMock />);
    const { result } = renderHook(() => useTranslation());
    const maxCharMessage = result.current.t('builder.toast.maxCharacters');
    expect(screen.queryByText(maxCharMessage)).not.toBeInTheDocument();

    const editable = screen.getByDisplayValue('untilted');
    fireEvent.change(editable, {
      target: { value: 'somestringlongmorethan20char' },
    });

    expect(screen.getByText(maxCharMessage)).toBeInTheDocument();
  });
});

const EditableMock: FC = () => {
  const { editableProps } = useCustomEditable();
  return (
    <Editable {...editableProps} data-testid="test">
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};
