import { useExtendButton } from './useExtendButton';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent, screen } from '../../../testConfig/customRender';
import { Box, Button } from '@chakra-ui/react';

describe('useExtendButton hook', () => {
  describe('isExtended', () => {
    test('should return false by default', () => {
      const { result } = renderHook(() => useExtendButton());

      expect(result.current.isExtended).toBeFalsy();
    });

    test('shoud update isExtend after calling toggleIsExtended', () => {
      const { result } = renderHook(() => useExtendButton());
      const initialIsExtended = result.current.isExtended;

      render(<Button {...result.current.iconButtonProps}> Click </Button>);
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(result.current.isExtended).toBe(!initialIsExtended);
    });

    test('shoud set isExtend = false when leave container', () => {
      const { result } = renderHook(() => useExtendButton());

      render(
        <Box {...result.current.containerProps} data-testid="container">
          <Button {...result.current.iconButtonProps}> Click </Button>
        </Box>,
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(result.current.isExtended).toBeTruthy();

      const container = screen.getByTestId('container');
      fireEvent.mouseLeave(container);

      expect(result.current.isExtended).toBeFalsy();
    });
  });
});
