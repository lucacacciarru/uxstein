import { Image, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { ClickableBoxWithDelete } from '../ClickableBoxWithDelete/ClickableBoxWithDelete';
import { UploadImageBox } from '../ImageFieldAttribute/UploadImageBox';
import { ModalUploadImage } from '../ModalUploadImage/ModalUploadImage';

type Props = {
  value: string;
  id: string;
  onChangeValue: (id: string, value: string) => void;
  deleteItem: (id: string) => void;
  placeholder: string;
};

export const InputModal: FC<Props> = ({
  value,
  id,
  onChangeValue,
  deleteItem,
  placeholder,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const deleteItemHandler = () => deleteItem(id);
  return (
    <ClickableBoxWithDelete
      clickCallback={onOpen}
      deleteCallback={deleteItemHandler}
    >
      <Image
        src={value}
        boxSize="full"
        objectFit={'contain'}
        fallback={<UploadImageBox />}
      />
      <ModalUploadImage
        inputValue={value}
        placeholder={placeholder}
        onChange={e => onChangeValue(id, e.target.value)}
        isOpen={isOpen}
        onClose={onClose}
      />
    </ClickableBoxWithDelete>
  );
};
