import { render } from '../../../_shared/testConfig/customRender';
import { ImageGridItem } from './ImageGridItem';

describe('ImageGridItem', () => {
  test('should render correctly', () => {
    render(
      <ImageGridItem
        attributes={{
          image: {
            label: 'builder.toolBar.attributes.image.label',
            placeholder: 'builder.toolBar.attributes.image.placeholder',
            items: [{ id: '1', value: '1' }],
            initialValue: [{ id: '1', value: '1' }],
            style: {},
          },
        }}
      />,
    );
  });
});
