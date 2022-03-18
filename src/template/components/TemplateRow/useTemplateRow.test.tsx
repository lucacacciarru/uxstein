import { HStack } from '@chakra-ui/react';
import { renderHook } from '@testing-library/react-hooks';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { useTemplateRow } from './useTemplateRow';

describe('useTemplateRow', () => {
  test('Should return disabled=left by default ', () => {
    const { result } = renderHook(() => useTemplateRow('default'));

    expect(result.current.disabled).toBe('left');
  });

  test('Should return disabled=undefined if scroll and both first and last element are not visible ', () => {
    const { result } = renderHook(() => useTemplateRow('default'));

    render(
      <HStack data-testid="container" {...result.current.containerProps}>
        Some content
      </HStack>,
    );
    const container = screen.getByTestId('container');
    fireEvent.scroll(container, { left: 300 });
    expect(result.current.disabled).toBe(undefined);
  });

  test('Should return disabled=right if scroll and last element is visible ', () => {
    const { result } = renderHook(() => useTemplateRow('default'));

    render(
      <HStack data-testid="container" {...result.current.containerProps}>
        <div ref={result.current.lastCardRef}></div>
      </HStack>,
    );
    const container = screen.getByTestId('container');
    fireEvent.scroll(container, { left: 300 });
    expect(result.current.disabled).toBe('right');
  });

  test('Should return disabled=left if scroll and first element is visible ', () => {
    const { result } = renderHook(() => useTemplateRow('default'));

    render(
      <HStack data-testid="container" {...result.current.containerProps}>
        <div ref={result.current.firstCardRef}></div>
      </HStack>,
    );
    const container = screen.getByTestId('container');
    fireEvent.scroll(container, { left: 300 });
    expect(result.current.disabled).toBe('left');
  });
});
