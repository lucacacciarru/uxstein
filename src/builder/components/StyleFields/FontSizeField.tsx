import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { textSizeSettings } from '../../config/styleSettings/text';
import { AttributeName } from '../../store/types';
import { SelectOneSize, SizesModel } from './SelectOneSize';

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  blockItemId: string;
};

export const FontSizeField: FC<Props> = ({
  attributeName,
  blockItemId,
  styleKey,
}) => {
  const { t } = useTranslation();

  const sizeSettings =
    textSizeSettings[attributeName as keyof typeof textSizeSettings];

  const [selected, setSelected] = useState<keyof SizesModel>(
    sizeSettings.selected,
  );

  const select = (size: keyof SizesModel) => {
    setSelected(size);
    // const newStyle = {[styleKey]: sizeSettings.sizes[size]}
    // dispatch(updateStyle({blockItemId, attributeName, newStyle}))
  };

  return (
    <SelectOneSize
      sizes={sizeSettings?.sizes}
      select={select}
      selected={selected}
      label={t(`builder.toolBar.style.labels.fontSize`)}
    />
  );
};
