import { MyPersona } from './MyPersona';
import { render } from '../../_shared/testConfig/customRender';
import { PersonaState } from '../store/types/general';

const MOCK_INITIAL_STATE: PersonaState = {
  data: {
    allIds: ['1'],
    byId: {
      '1': {
        createdAt: 0,
        updatedAt: 0,
        id: '1',
        src: 'anySrc',
        title: 'anyTitle',
        builderData: {
          pageSettings: [],
          gridItems: {},
          globalStyle: {
            backgroundColor: '#000000',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
        },
      },
    },
  },
};
describe('MyPersona component', () => {
  test('Should be rendered', () => {
    render(<MyPersona />, {
      mocks: {
        persona: MOCK_INITIAL_STATE,
        loading: { persona: { loading: 0 } },
      },
    });
  });
});
