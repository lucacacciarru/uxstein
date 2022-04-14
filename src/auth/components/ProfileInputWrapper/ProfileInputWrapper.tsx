import { Box, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';

type Props = {
  inputError: boolean;
  onSubmit: (e: React.FormEvent<HTMLDivElement>) => void;
  errorMessage: string;
};

export const ProfileInputWrapper: React.FC<Props> = ({
  errorMessage,
  inputError,
  onSubmit,
  children,
}) => {
  return (
    <Box w="full">
      <FormControl as="form" isInvalid={inputError} onSubmit={onSubmit}>
        {children}
        <Button mt="4" size="md" type="submit">
          Update
        </Button>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};
