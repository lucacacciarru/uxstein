import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import {
  Collapsable,
  CollapsableItem,
} from '../../../_shared/components/Collapsable';
import { AttributeName } from '../../store/types';
import { MapStyleField } from '../StyleFields/MapStyleField';

export type AttributeStyleFieldsProps = {
  blockItemId: string;
  name: AttributeName;
  styleKeys: string[];
  style?: Record<string, string>;
};

export const AttributeStyleFields: FC<AttributeStyleFieldsProps> = ({
  name,
  styleKeys,
  blockItemId,
  style,
}) => {
  return (
    <Collapsable mt="2">
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
  );
};
