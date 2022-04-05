import { Template } from '../../../template/store/types/general';
import { AvatarTemplate } from '../AvatarTemplate';
import { CardContainer } from '../../../_shared/components/CardContainer';
import { ContentCard } from '../../../_shared/components/ContentCard';
import { OptionTemplateCard } from '../OptionTemplateCard';
import { Link } from 'react-router-dom';
import { useTemplateCard } from './useTemplateCard';

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
  const { handleCreatePersona, pathLink } = useTemplateCard(id);
  return (
    <CardContainer role="card" ref={cardRef} onClick={handleCreatePersona}>
      {!isDefault && <OptionTemplateCard templateId={id} />}
      <Link to={pathLink}>
        <ContentCard
          title={name}
          Avatar={<AvatarTemplate isDefault={isDefault} />}
          {...rest}
        />
      </Link>
    </CardContainer>
  );
};
