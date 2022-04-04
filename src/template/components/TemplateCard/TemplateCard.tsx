import { Template } from '../../../template/store/types/general';
import { AvatarTemplate } from '../AvatarTemplate';
import { CardContainer } from '../../../_shared/components/CardContainer';
import { ContentCard } from '../../../_shared/components/ContentCard';
import { OptionTemplateCard } from '../OptionTemplateCard';

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
  return (
    <CardContainer role="card" ref={cardRef}>
      {!isDefault && <OptionTemplateCard templateId={id} />}
      <ContentCard
        title={name}
        Avatar={<AvatarTemplate isDefault={isDefault} />}
        {...rest}
      />
    </CardContainer>
  );
};
