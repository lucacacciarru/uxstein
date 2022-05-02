import { render, screen } from '../../../_shared/testConfig/customRender';
import { ProgressbarGridItem } from './ProgressBarGridItem';

describe('ProgressBarGridItem component', () => {
  test('should be rendered', () => {
    render(
      <ProgressbarGridItem
        attributes={{
          progress: {
            items: [{ id: 'test', value: '20' }],
            initialValue: [{ id: 'test', value: '20' }],
            label: 'auth.form.buttonLogin',
            placeholder: 'auth.form.buttonLogin',
            style: {},
          },
        }}
      />,
    );
    const progressBar = screen.getByTestId('progressbar');
    expect(progressBar).toBeInTheDocument();
  });
});
