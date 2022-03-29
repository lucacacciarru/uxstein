import { Persona } from '../../../persona/store/types/general';
import { CardContainer } from '../../../_shared/components/CardContainer';
import { PersonaTemplateContentCard } from '../../../_shared/components/PersonaTemplateContentCard';
import { OptionTemplateCard } from '../OptionTemplateCard';

type Props = {
  author?: string;
  type: 'persona' | 'template';
  cardRef?: React.RefObject<HTMLDivElement>;
  option: boolean;
} & Persona;

export const TemplateCard: React.FC<Props> = ({
  cardRef,
  id,
  option,
  ...rest
}) => {
  return (
    <CardContainer role="card" ref={cardRef}>
      {option && <OptionTemplateCard templateId={id} />}
      <PersonaTemplateContentCard {...rest} />
    </CardContainer>
  );
};
