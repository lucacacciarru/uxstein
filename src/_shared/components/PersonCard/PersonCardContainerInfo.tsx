import { Box, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AvatarPerson } from '../AvatarPerson';
import styles from './PersonCard.module.css';

type Props = {
  title: string;
  timeSinceLastUpdate: number;
  type: 'persona' | 'template';
  author: string;
};

const containerStyles = {
  w: '100%',
  py: '2',
  px: '4',
  justifyContent: 'space-between',
  borderTop: 'dark.s',
};

export const PersonCardContainerInfo: React.FC<Props> = ({
  title,
  timeSinceLastUpdate,
  author,
  type,
}) => {
  const { t } = useTranslation();

  return (
    <HStack {...containerStyles}>
      <Box px="4" py="1" w="70%">
        <h4 className={styles.cutText}>{title}</h4>
        <Text as="small">
          {timeSinceLastUpdate <= 30
            ? t('personCard.timeEdit', { count: timeSinceLastUpdate })
            : t('personCard.timeEdit_more')}
        </Text>
      </Box>
      <AvatarPerson author={author} type={type} />
    </HStack>
  );
};
