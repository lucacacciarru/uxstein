import { BoxProps, HStack } from '@chakra-ui/react';
import { DeleteBlockButton } from '../DeleteBlockButton';
import { LockBlockButton } from '../LockBlockButton';

type Props = {
  backgroundColor: string;
  iconColor: string;
  id: string;
};

const styleContainer: BoxProps = {
  position: 'absolute',
  top: '5%',
  right: '2%',
  px: '4',
  py: '2',
  className: 'options-block',
  borderRadius: 'lg',
  border: '2px solid black.0',
  gap: '2',
  boxShadow: 'lg',
};

export const OptionBlock: React.FC<Props> = ({ backgroundColor, ...rest }) => {
  return (
    <HStack bg={backgroundColor} {...styleContainer}>
      <DeleteBlockButton {...rest} />
      <LockBlockButton {...rest} />
    </HStack>
  );
};
