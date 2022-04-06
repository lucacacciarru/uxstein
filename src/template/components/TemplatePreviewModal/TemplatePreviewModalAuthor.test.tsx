import { render } from '../../../_shared/testConfig/customRender';
import { TemplatePreviewModalAuthor } from './TemplatePreviewModalAuthor';

describe('TemplatePreviewModalAuthor', () => {
  test('should render correctly', () => {
    render(<TemplatePreviewModalAuthor isDefault={false} />);
  });
  test('should render correctly with isDefault=true', () => {
    render(<TemplatePreviewModalAuthor isDefault={true} />);
  });
});
