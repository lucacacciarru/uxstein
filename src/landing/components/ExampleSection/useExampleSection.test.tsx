import { Template } from '../../../template/store/types/general';
import { render, screen } from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { useExampleSection } from './useExampleSection';

const MOCK_TEMPLATE: Template = {
  builderData: {
    gridItems: {},
    pageSettings: [],
    globalStyle: {
      backgroundColor: '#000000',
      columnGap: 0,
      rowGap: 0,
      containerPaddingX: 0,
      containerPaddingY: 0,
    },
  },
  id: 'anyString',
  isDefault: true,
  name: 'Test',
  src: 'anySrc',
};

function mockFetch() {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify([MOCK_TEMPLATE]),
    }),
  );
}

describe('useExampleSection hook', () => {
  beforeAll(() => {
    mockFetch();
  });

  test('', async () => {
    const { result } = renderHook(() => useExampleSection());
    const { renderExampleCards } = result.current;
    render(<div>{renderExampleCards}</div>);

    waitFor(() => {
      const card = screen.getByTestId('exampleCard');
      expect(card).toBeInTheDocument();
    });
  });
});
