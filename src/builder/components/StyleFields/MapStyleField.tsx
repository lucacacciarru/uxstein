import React, { FC } from 'react';
import { AttributeName } from '../../store/types';
import { ProgressBorderField } from '../ProgressBorderField';
import { AttributeColorField } from '../AttributeColorField/AttributeColorField';
import { FontSizeField } from '../FontSizeField/FontSizeField';

// TODO: remove partial, all AttributeName have to be mapped
const map: Record<string, React.FC<Props>> = {
  fontSize: FontSizeField,
  color: AttributeColorField,
  progressBarFilledTrackBackgroundColor: AttributeColorField,
  progressBarTrackBackgroundColor: AttributeColorField,
  progressBarBorderColor: AttributeColorField,
  progressBarBorderWidth: ProgressBorderField,
  progressBarBorderRadius: ProgressBorderField,
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
