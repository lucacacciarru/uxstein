import { NavigationTrigger } from './NavigationTrigger';
import { render, screen } from '../../testConfig/customRender';

const SAMPLE_TRIGGER_INITIAL_VALUE = 'anyValue';
const SAMPLE_TRIGGER_CHANGED_VALUE = 'anyOtherValue';
let SAMPLE_TRIGGER = SAMPLE_TRIGGER_INITIAL_VALUE;
const MOCK_TRIGGERS = [SAMPLE_TRIGGER, 'any', 'other', 'trigger'];
const MOCK_NAVIGATOR = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => MOCK_NAVIGATOR,
}));

const renderComponents = () => render(<NavigationTrigger triggers={MOCK_TRIGGERS} route={`any/${SAMPLE_TRIGGER}/route`}>
  <ul data-testid='trigger-list'>
    {MOCK_TRIGGERS.map((trigger, i) => (<li data-testid={`trigger-${i}`} key={trigger}>{trigger}</li>))}
  </ul>
</NavigationTrigger>);

describe('NavigationTrigger', () => {
  test('and its children should render correctly', () => {
    renderComponents();

    const triggerList = screen.getByTestId('trigger-list');
    expect(triggerList).toBeInTheDocument();

    MOCK_TRIGGERS.forEach((_, i) => {
      const trigger = screen.getByTestId(`trigger-${i}`);
      expect(trigger).toBeInTheDocument();
    });
  });

  test('should navigate to the updated route params if one of the triggers is updated', () => {
    renderComponents();
    expect(MOCK_NAVIGATOR.mock.calls[0][0]).toEqual(`any/${SAMPLE_TRIGGER_INITIAL_VALUE}/route`);
    SAMPLE_TRIGGER = SAMPLE_TRIGGER_CHANGED_VALUE;
    renderComponents();

    expect(MOCK_NAVIGATOR).toBeCalledWith(`any/${SAMPLE_TRIGGER_CHANGED_VALUE}/route`);
  });
});
