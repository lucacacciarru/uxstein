import { render, screen } from '../../../_shared/testConfig/customRender';
import { ComponentMap } from './ComponentMap';

describe('ComponentMap', () => {
  test('should render correctly', () => {
    render(<ComponentMap id="existingId" />);
  });

  test('should render TextGridItem if the block with corrispondent id have text type', () => {
    render(<ComponentMap id="existingId" />);
    const item = screen.getByTestId('text-grid-item');
    expect(item).toBeInTheDocument();
  });

  test('should render DefaultGridItem if the block with corrispondent id have unmatched type', () => {
    render(<ComponentMap id="existingId" />, {
      mocks: {
        builder: {
          allIds: ['existingId'],
          byId: {
            existingId: unMatchedGridItemType,
          },
          pageSettings: [{ i: 'existingId', x: 0, y: 0, w: 2, h: 2, maxW: 3 }],
          selectedBlockId: undefined,
        },
      },
    });
    const item = screen.getByTestId('default-grid-item');
    expect(item).toBeInTheDocument();
  });
});

const unMatchedGridItemType: any = {
  attributes: {},
  style: {},
  type: 'unmatched',
};
