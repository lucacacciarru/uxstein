import React, { FC } from 'react';
import { AttributeName } from '../../store/types';
import { AttributeColorField } from './AttributeColorField';
import { FontSizeField } from './FontSizeField';

// TODO: remove partial, all AttributeName have to be mapped
const map: Partial<Record<string, React.FC<Props>>> = {
  fontSize: FontSizeField,
  color: AttributeColorField,
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
