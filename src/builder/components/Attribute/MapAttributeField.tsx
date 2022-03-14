import React, { FC } from 'react';
import { AttributeName } from '../../store/types';
import { ProgressFieldAttribute } from './ProgressFieldAttribute/ProgressFieldAttribute';
import { TextFieldAttribute } from './TextFieldAttribute';

// remove partial, all AttributeName have to be mapped
const map: Partial<Record<AttributeName, React.FC<Props>>> = {
  title: TextFieldAttribute,
  subtitle: TextFieldAttribute,
  progress: ProgressFieldAttribute,
};

type Props = {
  name: AttributeName;
  blockItemId: string;
};

export const MapAttributeField: FC<Props> = props => {
  const Component = map[props.name];
  if (!Component) {
    return <></>;
  }
  return <Component {...props} />;
};
