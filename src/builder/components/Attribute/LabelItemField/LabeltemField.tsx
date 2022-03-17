import {
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { Icon } from '../../../../_shared/components';
import { MaxLengthMessage } from '../../../../_shared/components/MaxLengthMessage';
import { useAddItem } from './useAddItem';

type Props = {
  addCallback: (label: string, value: string) => void;
  placeholder?: string;
  initValue?: string;
};

export const LabelItemField: React.FC<Props> = ({ addCallback, ...rest }) => {
  const {
    addItem,
    errorMessage,
    inputError,
    onChange,
    textLabel,
    placeholder,
  } = useAddItem(addCallback, rest);
  return (
    <form onSubmit={addItem}>
      <FormControl position="relative" isInvalid={inputError}>
        <Input
          value={textLabel}
          onChange={onChange}
          placeholder={placeholder}
        />
        <InputRightElement position="absolute" top="-20%" h="100%">
          <IconButton
            minW="20px"
            aria-label="addButton"
            icon={
              <Icon
                name="Add"
                p="2"
                transition={'all .2s ease'}
                _hover={{ color: 'brand.primary' }}
              />
            }
            variant="unstyled"
            _hover={{ color: 'brand.primary' }}
            type="submit"
          />
        </InputRightElement>
        <MaxLengthMessage maxLength={15}>{textLabel}</MaxLengthMessage>
        <FormErrorMessage position="fixed">{errorMessage}</FormErrorMessage>
      </FormControl>
    </form>
  );
};
