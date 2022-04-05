import { Link } from 'react-router-dom';
import { Persona } from '../../store/types/general';
import { CardContainer } from '../../../_shared/components/CardContainer';
import { ContentCard } from '../../../_shared/components/ContentCard';
import { OptionPersonaCard } from '../OptionPersonaCard';
import { LastUpdatePersona } from '../LastUpdatePersona';

type Props = {
  cardRef?: React.RefObject<HTMLDivElement>;
} & Persona;

export const PersonaCard: React.FC<Props> = ({ id, cardRef, ...rest }) => {
  return (
    <CardContainer role="card" ref={cardRef}>
      <OptionPersonaCard personaId={id} />
      <Link to={`${id}/edit`}>
        <ContentCard {...rest}>
          <LastUpdatePersona lastUpdate={rest.updatedAt} />
        </ContentCard>
      </Link>
    </CardContainer>
  );
};
