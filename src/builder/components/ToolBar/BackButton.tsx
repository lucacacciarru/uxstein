import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { useSelectedBlock } from '../../hooks/useSelectedBlock';

export const BackButton: FC = () => {
  const { t } = useTranslation();
  const { clearSelection } = useSelectedBlock();

  return (
    <Button
      variant="ghost"
      onClick={clearSelection}
      size="icon-md"
      pr="4"
      color="black.0"
    >
      <Icon name="ChevronLeft" size="8" />
      {t('builder.toolBar.general.back')}
    </Button>
  );
};
