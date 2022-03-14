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
  addItem: (label: string) => void;
  placeholder: string;
};

export const LabelItemField: React.FC<Props> = ({ addItem, placeholder }) => {
  const { checkAndAddItem, errorMessage, inputError, onChange, textLabel } =
    useAddItem(addItem, placeholder);
  return (
    <>
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
            onClick={checkAndAddItem}
          />
        </InputRightElement>
        <MaxLengthMessage maxLength={15} selectString={textLabel} />
        <FormErrorMessage position="fixed">{errorMessage}</FormErrorMessage>
      </FormControl>
    </>
  );
};
