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
};
describe('EditTab', () => {
  test('should render correctly', () => {
    render(<EditTab selectedBlockId={EXISTING_ID} />, {
      mocks: { builder: MOCK_BUILDER_STATE },
    });
  });
});
