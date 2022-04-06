import { Template } from '../../../template/store/types/general';
import { AvatarTemplate } from '../AvatarTemplate';
import { CardContainer } from '../../../_shared/components/CardContainer';
import { ContentCard } from '../../../_shared/components/ContentCard';
import { OptionTemplateCard } from '../OptionTemplateCard';
import { TemplatePreviewModal } from '../TemplatePreviewModal/TemplatePreviewModal';
import { useDisclosure } from '@chakra-ui/react';

type Props = {
  cardRef?: React.RefObject<HTMLDivElement>;
} & Template;

export const TemplateCard: React.FC<Props> = ({
  cardRef,
  id,
  isDefault,
  name,
  ...rest
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <CardContainer role="card" ref={cardRef} onClick={onOpen}>
      {!isDefault && <OptionTemplateCard templateId={id} />}
      <ContentCard
        title={name}
        Avatar={<AvatarTemplate isDefault={isDefault} />}
        {...rest}
      />
      <TemplatePreviewModal
        isOpen={isOpen}
        onClose={onClose}
        title={name}
        id={id}
        isDefault={isDefault}
        src={rest.src}
      />
    </CardContainer>
  );
};
