import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { AttributesModel } from '../../store/types';
import { Handles } from '../Handles/Handles';

type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

export const ImageGridItem: FC<Props> = ({ style, id, attributes }) => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <Image
        src={attributes.image?.items[0].value}
        boxSize="full"
        fallbackSrc="logo192.png"
        objectFit="contain"
      />
      <Handles id={id} bg={style.backgroundColor} />
    </Box>
  );
};
