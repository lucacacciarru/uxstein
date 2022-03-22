import { Box, Button, ButtonGroup, FormLabel } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributeName } from '../../store/types';
import { useObjectFitStyleField } from './useObjectFitStyleField';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const ObjectFitStyleField: FC<Props> = props => {
  const { select, selected, label, buttonContain, buttonCover } =
    useObjectFitStyleField(props);
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <ButtonGroup>
        <Button
          variant="toggle"
          size="sm"
          isActive={selected === 'contain'}
          onClick={() => select('contain')}
          data-testid="buttonContain"
        >
          {buttonContain}
        </Button>
        <Button
          variant="toggle"
          size="sm"
          isActive={selected === 'cover'}
          onClick={() => select('cover')}
          data-testid="buttonCover"
        >
          {buttonCover}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
