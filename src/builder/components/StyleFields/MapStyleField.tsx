import React, { FC } from 'react';
import { AttributeName } from '../../store/types';
import { ProgressBorderField } from '../ProgressBorderField';
import { AttributeColorField } from '../AttributeColorField/AttributeColorField';
import { FontSizeField } from '../FontSizeField/FontSizeField';
import { ObjectFitStyleField } from '../ObjectFitStyleField/ObjectFitStyleField';
import { IconField } from '../IconField';

const map: Record<string, React.FC<Props>> = {
  fontSize: FontSizeField,
  color: AttributeColorField,
  progressBarFilledTrackBackgroundColor: AttributeColorField,
  progressBarTrackBackgroundColor: AttributeColorField,
  progressBarBorderColor: AttributeColorField,
  progressBarBorderWidth: ProgressBorderField,
  progressBarBorderRadius: ProgressBorderField,
  checkboxBorderColor: AttributeColorField,
  checkboxCheckColor: AttributeColorField,
  colorRateIcon: AttributeColorField,
  objectFit: ObjectFitStyleField,
  icon: IconField,
};

type Props = {
  attributeName: AttributeName;
  styleKey: string;
  styleValue: string;
  blockItemId: string;
};

export const MapStyleField: FC<Props> = props => {
  const Component = map[props.styleKey];
  if (!Component) {
    return <></>;
  }
  return <Component {...props} />;
};
