import { Accordion } from '@chakra-ui/react';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { FeatureShowcasePanelContent } from './FeatureShowcasePanelContent';

const INDEX = 1;
const EXAMPLE_ICON = 'Add';
const SET_FN = jest.fn();

describe('FeatureShowcasePanelContent', () => {
  test('should call the set function with his own index when click on the button', () => {
    render(
      <Accordion>
        <FeatureShowcasePanelContent
          i={INDEX}
          description=""
          title=""
          setOpenedIndex={SET_FN}
          icon={EXAMPLE_ICON}
        />
      </Accordion>,
    );

    const button = screen.getByTestId(`panel-button-${INDEX}`);
    fireEvent.click(button);

    expect(SET_FN).toBeCalledWith(INDEX);
  });
});
