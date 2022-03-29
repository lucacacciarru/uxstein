import { render } from '../../../_shared/testConfig/customRender';
import { ModalRenamePersona } from './ModalRenamePersona';

describe('ModalRenamePerson', () => {
  test('should be rendered', () => {
    render(
      <ModalRenamePersona isOpen={true} onClose={() => {}} personaId="anyId" />,
    );
  });
});
