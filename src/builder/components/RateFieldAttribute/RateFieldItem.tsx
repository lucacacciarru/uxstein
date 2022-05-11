import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Icon } from '../../../_shared/components';
import { RateButton } from './RateButton';
import { useRateFieldItem } from './useRateFieldItem';

type Props = {
  label?: string;
  value: string;
  id: string;
  onChangeLabel: (id: string, label: string) => void;
  onChangeValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
};

export const RateFieldItem: React.FC<Props> = ({
  label,
  value,
  id,
  children,
  ...rest
}) => {
  const { handlerOnChangeLabel, handlerOnClickValue, iconButtonProps } =
    useRateFieldItem({ id, ...rest });

  const numberOfItems = Array.from(Array(5).keys());
  const renderSingleRate = useMemo(
    () =>
      numberOfItems.map(item => {
        const indexItem = item + 1;
        return (
          <RateButton
            key={item}
            index={indexItem}
            onClick={e => handlerOnClickValue(e, indexItem.toString())}
            valueRate={value}
          />
        );
      }),
    [handlerOnClickValue, numberOfItems, value],
  );
  return (
    <Box>
      <HStack>
        <Editable defaultValue={label}>
          <EditablePreview />
          <EditableInput pl="1" onChange={handlerOnChangeLabel} value={label} />
        </Editable>
        <IconButton
          {...iconButtonProps}
          icon={<Icon name="Delete" color="" />}
        />
        {children}
      </HStack>
      <HStack mt="2">{renderSingleRate}</HStack>
    </Box>
  );
};
