import { render } from '../../../_shared/testConfig/customRender';
import { ImageListGridItem } from './ImageListGridItem';

describe('ImageListGridItem', () => {
  test('should render correctly', () => {
    render(
      <ImageListGridItem
        attributes={{
          'image-list': {
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
