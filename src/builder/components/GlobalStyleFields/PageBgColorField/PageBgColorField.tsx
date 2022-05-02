import { FC } from 'react';
import { ColorField } from '../../StyleFields/ColorField';
import { usePageBgcColorField } from './usePageBgColorField';

export const PageBgColorField: FC = () => {
  const { backgroundColor, label, setColor } = usePageBgcColorField();
  return (
    <ColorField label={label} onChange={setColor} value={backgroundColor} />
  );
};
