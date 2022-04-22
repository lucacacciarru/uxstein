import { Center, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
  pageName: string;
};

export const PageHeading: FC<Props> = ({ title, pageName }) => {
  return (
    <Center flexDir="column">
      <Text>{pageName}</Text>
      <Heading as="h1" size="h1">
        {title}
      </Heading>
    </Center>
  );
};
