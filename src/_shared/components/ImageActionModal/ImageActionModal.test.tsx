import { ImageActionModal } from '..';
import { render } from '../../testConfig/customRender';

describe('ImageActionModal', () => {
  test('should render correctly without optional props', () => {
    render(
      <ImageActionModal
        isOpen={true}
        onClose={() => {}}
        primaryAction={() => {}}
        primaryActionLabel="any string"
      />,
    );
  });

  test('should render correctly with optional props', () => {
    render(
      <ImageActionModal
        isOpen={true}
        onClose={() => {}}
        primaryAction={() => {}}
        primaryActionLabel="any string"
        secondaryAction={() => {}}
        secondaryActionLabel="any string"
      />,
    );
  });

  test('should render correctly without secondaryAction', () => {
    render(
      <ImageActionModal
        isOpen={true}
        onClose={() => {}}
        primaryAction={() => {}}
        primaryActionLabel="any string"
        secondaryActionLabel="any string"
      />,
    );
  });
});
