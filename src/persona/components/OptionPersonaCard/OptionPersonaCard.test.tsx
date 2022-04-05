import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { OptionPersonaCard } from './OptionPersonaCard';

describe('OptionPersonaCard component', () => {
  test('Should be rendered', () => {
    render(<OptionPersonaCard personaId="anyId" />);
  });
  test('if button rename is clicked, textInputModal should be in the document', async () => {
    render(<OptionPersonaCard personaId="anyId" />);
    const button = screen.getByTestId('buttonRenameModal');
    fireEvent.click(button);
    waitFor(() => {
      const renameModal = screen.getByTestId('inputTextModal');
      expect(renameModal).toBeInTheDocument();
    });
  });
  test('if button delete is clicked, actionModal should be in the document', async () => {
    render(<OptionPersonaCard personaId="anyId" />);
    const button = screen.getByTestId('buttonRenameModal');
    fireEvent.click(button);
    waitFor(() => {
      const actionModal = screen.getByTestId('actionModal');
      expect(actionModal).toBeInTheDocument();
    });
  });
});
