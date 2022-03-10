import { Box, FormLabel, Input, InputGroup, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { useAttributeFieldByIdAndName } from '../../hooks/useAttributeFieldByIdAndName';
import { AttributeName } from '../../store/types';
import { MapStyleField } from '../StyleFields/MapStyleField';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const TextFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, label, placeholder, style, styleKeys } =
    useAttributeFieldByIdAndName(blockItemId, name);

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input placeholder={placeholder} value={value} onChange={onChange} />
      </InputGroup>
      <Collapsable>
        <CollapsableItem name={`${name} style`} nested>
          <Stack spacing={'6'}>
            {styleKeys.map(styleKey => (
              <MapStyleField
                key={styleKey}
                attributeName={name}
                blockItemId={blockItemId}
                styleKey={styleKey}
                styleValue={style ? style[styleKey] : ''}
              />
            ))}
          </Stack>
        </CollapsableItem>
      </Collapsable>
    </Box>
  );
};
