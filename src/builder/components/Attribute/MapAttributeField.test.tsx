import { render } from '../../../_shared/testConfig/customRender';
import { AttributeName } from '../../store/types';
import { MapAttributeField } from './MapAttributeField';

describe('MapAttributeField', () => {
  test('should render correctly even in case of unmatched attribute name', () => {
    render(
      <MapAttributeField
        name={'unmatchedAttributeName' as AttributeName}
        blockItemId=""
      />,
    );
  });
});
