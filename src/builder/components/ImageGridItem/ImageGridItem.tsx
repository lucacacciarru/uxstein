import { Image } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { ImageFallback } from '../ImageFallback/ImageFallback';

type Props = {
  attributes: AttributesModel;
};

export const ImageGridItem: FC<Props> = ({ attributes }) => {
  return (
    <Image
      src={attributes.image?.items[0].value}
      boxSize="full"
      fallback={<ImageFallback />}
      objectFit={attributes.image?.style.objectFit as 'cover' | 'contain'}
    />
  );
};
