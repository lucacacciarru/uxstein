import { FC } from 'react';
import { AttributeName } from '../../store/types';
import { ColorField } from '../StyleFields/ColorField';
import { useAttributeColorField } from './useAttributeColorField';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const AttributeColorField: FC<Props> = props => {
  const { color, label, setNewColor } = useAttributeColorField({ ...props });

  return <ColorField label={label} value={color} onChange={setNewColor} />;
};
