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
          label: 'builder.toolBar.attributes.items.label' as never,
          placeholder: 'builder.toolBar.attributes.items.placeholder' as never,
          style: {
            progressBarBorderWidth: '0px',
          },
        },
      },
      style: {},
      type: 'progress',
    },
  },
  pageSettings: [],
  personaId: 'any id',
  title: 'any title',
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
