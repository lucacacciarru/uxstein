import { Spacer, StackProps, VStack } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Icon } from '../Icon';
import { CustomLink } from './Partials';

export const SideNavigation: FC = () => {
  const containerProps: StackProps = useMemo(() => {
    return {
      position: 'absolute',
      top: '0',
      left: '0',
      h: '100vh',
      w: '32',
      border: 'dark.s',
      borderWidth: '0 3px',
      spacing: '20',
    };
  }, []);

  return (
    <VStack {...containerProps}>
      <div>Logo</div>
      <VStack spacing="2">
        <CustomLink to="my-personas">
          <Icon name="UserGroup" size="14" />
        </CustomLink>
        <CustomLink to="my-templates">
          <Icon name="Layout10" size="12" />
        </CustomLink>
        <Spacer />
      </VStack>
    </VStack>
  );
};
