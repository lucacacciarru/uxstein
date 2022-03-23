import { Box, FormLabel, Image, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { useAttributeFieldByIdAndName } from '../../hooks/useAttributeFieldByIdAndName';
import { AttributeName } from '../../store/types';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { ClickableBoxWithDelete } from '../ClickableBoxWithDelete/ClickableBoxWithDelete';
import { ModalUploadImage } from '../ModalUploadImage/ModalUploadImage';
import { UploadImageBox } from './UploadImageBox';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ImageFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, label, placeholder, attributeStyleFieldsProps } =
    useAttributeFieldByIdAndName(blockItemId, name);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <ClickableBoxWithDelete clickCallback={onOpen}>
        <Image
          src={value}
          boxSize="full"
          objectFit={'contain'}
          fallback={<UploadImageBox />}
        />
      </ClickableBoxWithDelete>
      <AttributeStyleFields {...attributeStyleFieldsProps} />
      <ModalUploadImage
        inputValue={value}
        placeholder={placeholder}
        onChange={onChange}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
