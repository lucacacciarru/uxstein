import { Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '../SectionWrapper';
import { WorkflowTabs } from '../WorkflowTabs/WorkflowTabs';

export const WorkflowSection: FC = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <Heading as="h2" textStyle="h2" textAlign="center" mb="1">
        {t('landing.workflow.title')}
      </Heading>
      <Text textAlign="center">{t('landing.workflow.description')}</Text>
      <WorkflowTabs />
    </SectionWrapper>
  );
};
