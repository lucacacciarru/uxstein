import React, { FC } from 'react';
import { AttributeName } from '../../store/types';
import { ProgressFieldAttribute } from './ProgressFieldAttribute/ProgressFieldAttribute';
import { TextAreaFieldAttribute } from '../TextAreaFieldAttribute/TextAreaFieldAttribute';
import { TextFieldAttribute } from '../TextFieldAttribute/TextFieldAttribute';
import { CheckboxFieldAttribute } from '../CheckboxFieldAttribute/CheckboxFieldAttribute';
import { TextListFieldAttribute } from '../TextListFieldAttribute';
import { RateFieldAttribute } from '../RateFieldAttribute';
import { ImageFieldAttribute } from '../ImageFieldAttribute/ImageFieldAttribute';
import { ImageListFieldAttribute } from '../ImageListFieldAttribute/ImageListFieldAttribute';

const map: Record<AttributeName, React.FC<Props>> = {
  title: TextFieldAttribute,
  subtitle: TextFieldAttribute,
  progress: ProgressFieldAttribute,
  body: TextAreaFieldAttribute,
  checkbox: CheckboxFieldAttribute,
  'text-list': TextListFieldAttribute,
  'image-list': ImageListFieldAttribute,
  rate: RateFieldAttribute,
  image: ImageFieldAttribute,
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
