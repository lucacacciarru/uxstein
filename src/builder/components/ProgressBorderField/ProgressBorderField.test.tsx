import { render } from '../../../_shared/testConfig/customRender';
import { BuilderState } from '../../store/types';
import { ProgressBorderField } from './ProgressBorderField';

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: {
    existingId: {
      attributes: {
        progress: {
          initialValue: [{ id: 'test', value: 'test' }],
          items: [{ id: 'test', value: 'test' }],
          label: 'auth.form.textForSignup',
          placeholder: 'auth.form.buttonLogin',
          style: {
            progressBarBorderWidth: '0px',
          },
        },
      },
      style: {},
      type: 'text',
    },
  },
  pageSettings: [],
};

describe('ProgressBorderFIeld component', () => {
  test('should be rendered', () => {
    render(
      <ProgressBorderField
        attributeName="progress"
        blockItemId="existingId"
        styleKey="progressBarBorderWidth"
      />,
      { mocks: { builder: MOCK_BUILDER_STATE } },
    );
  });
});
