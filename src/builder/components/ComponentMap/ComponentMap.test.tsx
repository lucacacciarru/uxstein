import { render, screen } from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { ComponentMap } from './ComponentMap';

const EXISTING_ID = 'existingId';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: { attributes: {}, style: {}, type: 'text' },
  },
  pageSettings: [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }],
  entityId: 'any id',
  entityType: 'persona',
  title: 'any title',
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
    containerPaddingX: 0,
    containerPaddingY: 0,
  },
};

describe('ComponentMap', () => {
  test('should render correctly', () => {
    render(<ComponentMap id={EXISTING_ID} />, {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
  });

  test('should render TextGridItem if the block with correspondent id have text type', () => {
    render(<ComponentMap id={EXISTING_ID} />, {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
    const item = screen.getByTestId('text-grid-item');
    expect(item).toBeInTheDocument();
  });

  test('should not break even if the id does not exists in the store', () => {
    render(<ComponentMap id={'unmatched id'} />);
  });
});
