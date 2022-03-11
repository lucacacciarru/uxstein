import { render } from '../../../_shared/testConfig/customRender';
import { MapStyleField } from './MapStyleField';

describe('MapStyleField', () => {
  test('should render correctly even for unmatching key in the map', () => {
    render(
      <MapStyleField
        styleKey="unmatchingStyleKey"
        attributeName="body"
        blockItemId="anyId"
        styleValue="anyStyle"
      />,
    );
  });
});
