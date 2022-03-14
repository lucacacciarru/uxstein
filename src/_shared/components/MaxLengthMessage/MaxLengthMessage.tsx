import { FormHelperText, HelpTextProps } from '@chakra-ui/react';

type Props = {
  children: string;
  maxLength: number;
} & HelpTextProps;

export const MaxLengthMessage: React.FC<Props> = ({
  maxLength,
  children,
  ...style
}) => {
  return (
    <FormHelperText
      {...style}
      color={children.length <= maxLength ? 'black.80' : 'status.error'}
    >{`${children.length}/${maxLength}`}</FormHelperText>
  );
};
