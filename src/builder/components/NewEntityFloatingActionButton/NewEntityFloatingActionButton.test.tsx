import { render, screen } from '../../../_shared/testConfig/customRender';
import { NewEntityFloatingActionButton } from './NewEntityFloatingActionButton';

const MOCK_PATH = 'any-path'

describe('NewEntityFloatingActionButton component', () => {
  test('should be rendered with the Create New Persona link', () => {
    render(<NewEntityFloatingActionButton destinationPath={MOCK_PATH}/>);

    const newPersonaLink = screen.getByTestId('new-entity-link');

    expect(newPersonaLink).toHaveAttribute(
      'href',
      `/${MOCK_PATH}`,
    );
  });
});
