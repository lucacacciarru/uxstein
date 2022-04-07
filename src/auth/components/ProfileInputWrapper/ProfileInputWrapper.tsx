import { Box, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';

type Props = {
  inputError: boolean;
  onClick: () => void;
  errorMessage: string;
};

export const ProfileInputWrapper: React.FC<Props> = ({
  errorMessage,
  inputError,
  onClick,
  children,
}) => {
  return (
    <Box w="full">
      <FormControl isInvalid={inputError}>
        {children}
        <Button mt="4" size="md" type="submit" onClick={onClick}>
          Update
        </Button>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};
