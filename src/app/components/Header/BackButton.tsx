import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../_shared/components';

export const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(-1)}>
      <Icon
        name="ChevronLeft"
        size="10"
        transition={'all .2s ease-in-out'}
        _hover={{ color: 'brand.primary', transform: ' scale(1.3)' }}
      />
    </Box>
  );
};
