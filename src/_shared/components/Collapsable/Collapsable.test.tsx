import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../testConfig/customRender';
import { Collapsable } from './Collapsable';
import { CollapsableItem } from './CollapsableItem';

describe('Collpsable', () => {
  test('should render correctly', () => {
    render(
      <Collapsable>
        <CollapsableItem name="Stile" nested>
          Lorem ipsum
        </CollapsableItem>
      </Collapsable>,
    );
  });

  test('content should be NOT visible by default', () => {
    render(
      <Collapsable>
        <CollapsableItem name="Stile">Lorem ipsum</CollapsableItem>
      </Collapsable>,
    );

    const collapsableContent = screen.getByTestId('collapsable-content');

    expect(collapsableContent).not.toBeVisible();
  });

  test('content should be visible if click on button', async () => {
    render(
      <Collapsable>
        <CollapsableItem name="Stile">Lorem ipsum</CollapsableItem>
      </Collapsable>,
    );

    const collapsableContent = screen.getByTestId('collapsable-content');
    expect(collapsableContent).not.toBeVisible();

    const toggleButton = screen.getByRole('collapsable-button');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(collapsableContent).toBeVisible();
    });
  });
});
