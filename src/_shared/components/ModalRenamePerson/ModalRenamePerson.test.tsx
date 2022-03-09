import { render } from '../../testConfig/customRender';
import { ModalRenamePerson } from './ModalRenamePerson';

describe('ModalRenamePerson', () => {
  test('should be renderd', () => {
    render(
      <ModalRenamePerson isOpen={true} onClose={() => {}} personaId="anyId" />,
    );
  });
});
