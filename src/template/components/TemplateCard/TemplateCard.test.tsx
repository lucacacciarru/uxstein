import { render } from '../../../_shared/testConfig/customRender';
import { TemplateCard } from './TemplateCard';
const MOCK_BUILDER_DATA = {
  gridItems: {},
  pageSettings: [],
  globalStyle: {
    backgroundColor: '#000000',
    columnGap: 0,
    rowGap: 0,
  },
};
describe('TemplateCard', () => {
  test('should render correctly', () => {
    render(
      <TemplateCard
        builderData={MOCK_BUILDER_DATA}
        id=""
        isDefault={false}
        name="any string"
        src="any url"
      />,
    );
  });
});
