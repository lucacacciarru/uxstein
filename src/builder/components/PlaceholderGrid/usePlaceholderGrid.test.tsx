import { renderHook } from '@testing-library/react-hooks';
import { BuilderProvider } from '../BuilderContext';
import { usePlaceholderGrid } from './usePlaceholderGrid';

describe('usePlaceholderGrid hook', () => {
  test('default value of opacityContainer should be 0 ', () => {
    const wrapper: React.FC = ({ children }) => (
      <BuilderProvider>{children}</BuilderProvider>
    );
    const { result } = renderHook(() => usePlaceholderGrid(2, 2), { wrapper });
    expect(result.current.opacityContainer).toEqual('0');
  });
});
