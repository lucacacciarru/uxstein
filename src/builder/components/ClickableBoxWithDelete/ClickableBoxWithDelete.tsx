import { Box, BoxProps, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '../../../_shared/components';

const iconButtonProps: IconButtonProps = {
  'aria-label': 'Delete Item',
  variant: 'ghost',
  size: 'icon-sm',
  pos: 'absolute',
  right: '1',
  top: '1',
  opacity: '0',
  className: 'deleteIcon',
};

const containerProps: BoxProps = {
  h: '32',
  mb: '4',
  border: 'dark.s',
  _hover: { border: 'green.s', '>.deleteIcon': { opacity: '1' } },
  transition: 'all 1s linear',
  pos: 'relative',
};

type Props = {
  clickCallback: () => void;
  deleteCallback?: () => void;
};

export const ClickableBoxWithDelete: FC<Props> = ({
  clickCallback,
  deleteCallback,
  ...rest
}) => {
  return (
    <Box onClick={clickCallback} {...containerProps} data-testid="clickableBox">
      {rest.children}
      {deleteCallback && (
        <IconButton
          {...iconButtonProps}
          icon={<Icon name="Delete" />}
          data-testid="deleteButton"
          onClick={e => {
            e.stopPropagation();
            deleteCallback();
          }}
        />
      )}
    </Box>
  );
};
