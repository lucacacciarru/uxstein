import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { colorFieldsLabels } from '../../config/styleSettings/colorFieldsLabels';
import { AttributeName } from '../../store/types';
import { ColorField } from './ColorField';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const AttributeColorField: FC<Props> = ({ styleValue, styleKey }) => {
  const [color, setColor] = useState(styleValue);

  const setNewColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    // debounced dispatch
  };

  const { t } = useTranslation();
  const label = t(colorFieldsLabels[styleKey]) as string;

  return <ColorField label={label} value={color} onChange={setNewColor} />;
};
