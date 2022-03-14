import { FormHelperText, HelpTextProps } from '@chakra-ui/react';

type Props = {
  selectString: string;
  maxLength: number;
} & HelpTextProps;

export const MaxLengthMessage: React.FC<Props> = ({
  selectString,
  maxLength,
  ...style
}) => {
  return (
    <FormHelperText
      {...style}
      color={selectString.length <= maxLength ? 'black.80' : 'status.error'}
    >{`${selectString.length}/${maxLength}`}</FormHelperText>
  );
};
