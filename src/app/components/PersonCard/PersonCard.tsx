import { Avatar, Box, Image, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { CardContainer } from '../../../_shared/components/CardContainer';
import styles from './PersonCard.module.css';
import { PersonCardContainerInfo } from './PersonCardContainerInfo';
import { timeBetweenTwoDays } from './timeBetweenTwoDays';

type Props = {
  src: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  type: 'persona' | 'template';
  author?: string;
};

export const PersonCard: React.FC<Props> = ({
  src,
  title,
  updatedAt,
  author = 'default',
  type,
  createdAt,
}) => {
  const { t } = useTranslation();
  const timeSinceLastUpdate = timeBetweenTwoDays(createdAt, updatedAt);

  const renderAvatar = useMemo(() => {
    if (type === 'template') {
      return (
        <Avatar
          data-testid="avatar"
          name={author === 'default' ? undefined : author}
          icon={
            author === 'default' ? (
              <Icon data-testid="icon" name="Frank" />
            ) : undefined
          }
        />
      );
    }
    return <></>;
  }, [author, type]);
  return (
    <CardContainer role="card" maxW="400px" w="20vw">
      <Box w="100%" h="20vh" p="3" background="black.20">
        <Image src={src} w="100%" h="100%" objectFit="contain" />
      </Box>
      <PersonCardContainerInfo>
        <Box px="4" py="1" w="70%">
          <h4 className={styles.cutText}>{title}</h4>
          <Text as="small">
            {timeSinceLastUpdate <= 30
              ? t('app.personCard.timeEdit', { count: timeSinceLastUpdate })
              : t('app.personCard.timeEdit_more')}
          </Text>
        </Box>
        {renderAvatar}
      </PersonCardContainerInfo>
    </CardContainer>
  );
};
