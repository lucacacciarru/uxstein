import { render } from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { EditTab } from './EditTab';

const EXISTING_ID = 'existingId';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: { [EXISTING_ID]: getBlockItemSettings('text').gridItemSettings },
  pageSettings: [],
  selectedBlockId: EXISTING_ID,
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
describe('EditTab', () => {
  test('should render correctly', () => {
    render(<EditTab selectedBlockId={EXISTING_ID} />, {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
  });
});
