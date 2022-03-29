import { Link } from 'react-router-dom';
import { Persona } from '../../store/types/general';
import { CardContainer } from '../../../_shared/components/CardContainer';
import { PersonaTemplateContentCard } from '../../../_shared/components/PersonaTemplateContentCard';
import { OptionPersonaCard } from '../OptionPersonaCard';

type Props = {
  author?: string;
  type: 'persona' | 'template';
  cardRef?: React.RefObject<HTMLDivElement>;
} & Persona;

export const PersonaCard: React.FC<Props> = ({ id, cardRef, ...rest }) => {
  return (
    <CardContainer role="card" ref={cardRef}>
      <OptionPersonaCard personaId={id} />
      <Link to={`${id}/edit`}>
        <PersonaTemplateContentCard {...rest} />
      </Link>
    </CardContainer>
  );
};
