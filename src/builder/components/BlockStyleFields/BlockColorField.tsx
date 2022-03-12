import { FC } from 'react';
import { ColorField } from '../StyleFields/ColorField';
import { useBlockColorField } from './useBlockColorField';

type Props = {
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const BlockColorField: FC<Props> = props => {
  const { color, label, setColor } = useBlockColorField({ ...props });

  return <ColorField label={label} value={color} onChange={setColor} />;
};
