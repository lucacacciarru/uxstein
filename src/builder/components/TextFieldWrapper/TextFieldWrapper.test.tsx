import { render } from '@testing-library/react';
import { AttributeStyleFieldsProps } from '../Attribute/AttributeStyleFields';
import { TextFieldWrapper } from './TextFieldWrapper';

type PropsTextFieldWrapper = {
  label: string;
  errorInput: boolean;
  errorMessage: string;
  maxLength: number;
  value?: string;
  attributeStyleFieldsProps: AttributeStyleFieldsProps;
};

const mockProps: PropsTextFieldWrapper = {
  label: 'anyString',
  errorInput: false,
  errorMessage: 'anyString',
  maxLength: 100,
  value: 'anyString',
  attributeStyleFieldsProps: {
    blockItemId: 'anyString',
    name: 'title',
    styleKeys: [],
  },
};

describe('TextFieldWrapper component', () => {
  test('Should be rendered', () => {
    render(<TextFieldWrapper {...mockProps} />);
  });
});
