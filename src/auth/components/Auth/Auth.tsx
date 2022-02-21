import { HStack, Stack } from '@chakra-ui/react';
import { Hero, FormAuth } from './partials';

export const Auth: React.FC = () => {
  return (
    <HStack
      align={'center'}
      justifyContent="space-between"
      w={'100%'}
      h={'100vh'}
      overflow={'hidden'}
    >
      <Hero />

      <Stack alignItems="center" justifyContent={'center'} w={'50%'}>
        <FormAuth />
      </Stack>
    </HStack>
  );
};
