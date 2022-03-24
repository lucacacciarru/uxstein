import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { MaxLengthMessage } from '../../../_shared/components/MaxLengthMessage';
import {
  AttributeStyleFields,
  AttributeStyleFieldsProps,
} from '../Attribute/AttributeStyleFields';

type Props = {
  label: string;
  errorInput: boolean;
  errorMessage: string;
  maxLength: number;
  value?: string;
  attributeStyleFieldsProps: AttributeStyleFieldsProps;
};

export const TextFieldWrapper: React.FC<Props> = ({
  errorInput,
  label,
  maxLength,
  value,
  children,
  errorMessage,
  attributeStyleFieldsProps,
}) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <FormControl isInvalid={errorInput}>
        {children}
        <MaxLengthMessage maxLength={maxLength}>
          {value as string}
        </MaxLengthMessage>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
    </Box>
  );
};
