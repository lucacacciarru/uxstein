import { render } from '../../../_shared/testConfig/customRender';
import { ToolBar } from './ToolBar';

describe('ToolBar', () => {
  test('should render correctly', () => {
    render(<ToolBar setBlockSetup={() => {}} />);
  });
});
