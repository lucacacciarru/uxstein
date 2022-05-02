import { render } from '../../testConfig/customRender';
import { UploadImageModal } from './UploadImageModal';

const fn = jest.fn();

describe('UploadImageModal component', () => {
  test('Should be rendered', () => {
    render(
      <UploadImageModal
        isOpen={true}
        onChange={fn}
        onClose={fn}
        placeholder="anyString"
      />,
    );
  });
});
