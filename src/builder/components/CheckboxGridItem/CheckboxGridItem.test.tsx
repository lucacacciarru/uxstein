import { render } from '../../../_shared/testConfig/customRender';
import { AttributesModel } from '../../store/types';
import { CheckboxGridItem } from './CheckboxGridItem';
type Props = {
  style: Record<string, string>;
  attributes: AttributesModel;
  id: string;
};

const MOCK_PROPS: Props = {
  attributes: {
    checkbox: {
      initialValue: [{ label: 'any label', value: 'any value', id: 'anyId' }],
      items: [{ label: 'any label', value: 'any value', id: 'anyId' }],
      label: 'builder.toolBar.attributes.items.label',
      placeholder: 'builder.toolBar.attributes.items.placeholder',
      style: {},
    },
  },
  style: {},
  id: 'existingId',
};

describe('CheckboxGridItem', () => {
  test('should render correctly', () => {
    render(<CheckboxGridItem {...MOCK_PROPS} />);
  });
});
