import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { ImageActionModal } from '../../../_shared/components';
import { TemplatePreviewModalAuthor } from './TemplatePreviewModalAuthor';
import { useTemplatePreviewModal } from './useTemplatePreviewModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  title: string;
  isDefault: boolean;
  src?: string;
};

export const TemplatePreviewModal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  src,
  isDefault,
  id,
}) => {
  const { imageActionModalProps } = useTemplatePreviewModal(id);
  return (
    <ImageActionModal
      isOpen={isOpen}
      onClose={onClose}
      src={src}
      {...imageActionModalProps}
    >
      <Heading>{title}</Heading>
      <TemplatePreviewModalAuthor isDefault={isDefault} />
    </ImageActionModal>
  );
};
