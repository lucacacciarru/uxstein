import { render } from '../../../_shared/testConfig/customRender';
import { AttributeName, ItemAttribute } from '../../store/types';
import { RateGridItem } from './RateGridItem';

const ATTRIBUTES_MOCK: Partial<Record<AttributeName, ItemAttribute>> = {
  rate: {
    items: [{ id: 'test', value: '20' }],
    initialValue: [{ id: 'test', value: '20' }],
    label: 'auth.form.buttonLogin',
    placeholder: 'auth.form.buttonLogin',
    style: {},
  },
};

describe('RateGridItem component', () => {
  test('Should be rendered', () => {
    render(<RateGridItem style={{}} attributes={ATTRIBUTES_MOCK} id="anyId" />);
  });
});
