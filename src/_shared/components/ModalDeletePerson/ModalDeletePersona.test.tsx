import { render } from '../../testConfig/customRender';
import { ModalDeletePersona } from './ModalDeletePersona';
describe('ModalDeletePerson', () => {
  test('should be rendered', () => {
    render(
      <ModalDeletePersona isOpen={true} onClose={() => {}} personaId="anyId" />,
    );
  });
});
