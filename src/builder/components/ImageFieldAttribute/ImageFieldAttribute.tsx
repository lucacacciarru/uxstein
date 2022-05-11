import { Box, FormLabel, Image, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { UploadImageBox } from '../../../_shared/components/UploadImageBox';
import { UploadImageModal } from '../../../_shared/components/UploadImageModal';
import { useSingleAttributeField } from '../../hooks/useSingleAttributeField';
import { AttributeName } from '../../store/types';
import { AttributeStyleFields } from '../Attribute/AttributeStyleFields';
import { ClickableBoxWithDelete } from '../ClickableBoxWithDelete/ClickableBoxWithDelete';

type Props = {
  blockItemId: string;
  name: AttributeName;
};

export const ImageFieldAttribute: FC<Props> = ({ name, blockItemId }) => {
  const { value, onChange, label, placeholder, attributeStyleFieldsProps } =
    useSingleAttributeField(blockItemId, name);

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
      <UploadImageModal
        inputValue={value}
        placeholder={placeholder}
        onChange={onChange}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
