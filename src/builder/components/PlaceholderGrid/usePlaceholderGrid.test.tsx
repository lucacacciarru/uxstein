import { renderHook, act } from '@testing-library/react-hooks';
import { useContext } from 'react';
import { render, screen } from '../../../_shared/testConfig/customRender';
import { BuilderContext, BuilderProvider } from '../BuilderContext';
import { usePlaceholderGrid } from './usePlaceholderGrid';

const useTestHook = () => {
  const { setShowGridPlaceholder } = useContext(BuilderContext);

  const { opacityContainer } = usePlaceholderGrid({ rows: 2, columns: 2 });
  return {
    setShowGridPlaceholder,
    opacityContainer,
  };
};

describe('usePlaceholderGrid hook', () => {
  test('default value of opacityContainer should be 0 ', () => {
    const wrapper: React.FC = ({ children }) => (
      <BuilderProvider>{children}</BuilderProvider>
    );
    const { result } = renderHook(
      () => usePlaceholderGrid({ columns: 2, rows: 2 }),
      { wrapper },
    );
    expect(result.current.opacityContainer).toEqual('0');
  });

  test('should change the opacity to 1 if call setGridPlaceholder(true) ', () => {
    const wrapper: React.FC = ({ children }) => (
      <BuilderProvider>{children}</BuilderProvider>
    );
    const { result } = renderHook(() => useTestHook(), { wrapper });
    act(() => {
      result.current.setShowGridPlaceholder(true);
    });
    expect(result.current.opacityContainer).toEqual('1');
  });

  test('should have borders if there are no gap', () => {
    const wrapper: React.FC = ({ children }) => (
      <BuilderProvider>{children}</BuilderProvider>
    );
    const { result } = renderHook(
      () =>
        usePlaceholderGrid({
          columns: 2,
          rows: 2,
          rowGap: '0px',
          columnGap: '0px',
        }),
      { wrapper },
    );

    render(<>{result.current.renderPlaceholderBlocks}</>);

    const placeholderGridItem = screen.getAllByTestId('placeholder-grid-item');

    expect(placeholderGridItem[0]).toHaveStyle({
      'border-top': '2px solid white',
      'border-right': '2px solid white',
      'border-bottom': '2px solid white',
      'border-left': '2px solid white',
    });
  });

  test('should have no borders at top and bottom if there are a defined rowGap', () => {
    const wrapper: React.FC = ({ children }) => (
      <BuilderProvider>{children}</BuilderProvider>
    );
    const { result } = renderHook(
      () =>
        usePlaceholderGrid({
          columns: 2,
          rows: 2,
          rowGap: '10px',
          columnGap: '0px',
        }),
      { wrapper },
    );

    render(<>{result.current.renderPlaceholderBlocks}</>);

    const placeholderGridItem = screen.getAllByTestId('placeholder-grid-item');

    expect(placeholderGridItem[0]).toHaveStyle({
      'border-top': '0',
      'border-bottom': '0',
      'border-right': '2px solid white',
      'border-left': '2px solid white',
    });
  });

  test('should have no borders at left and right if there are a defined columnGap', () => {
    const wrapper: React.FC = ({ children }) => (
      <BuilderProvider>{children}</BuilderProvider>
    );
    const { result } = renderHook(
      () =>
        usePlaceholderGrid({
          columns: 2,
          rows: 2,
          rowGap: '0px',
          columnGap: '10px',
        }),
      { wrapper },
    );

    render(<>{result.current.renderPlaceholderBlocks}</>);

    const placeholderGridItem = screen.getAllByTestId('placeholder-grid-item');

    expect(placeholderGridItem[0]).toHaveStyle({
      'border-right': '0',
      'border-left': '0',
      'border-top': '2px solid white',
      'border-bottom': '2px solid white',
    });
  });
});
