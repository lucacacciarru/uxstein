import { render, screen } from '../../../_shared/testConfig/customRender';
import { NewPersonaFloatingActionButton } from './NewPersonaFloatingActionButton';
import { PATHS } from '../../../_shared/types/paths';

describe('NewPersonaFloatingActionButton component', () => {
  test('should be rendered with the Create New Persona link', () => {
    render(<NewPersonaFloatingActionButton />);

    const newPersonaLink = screen.getByTestId('new-persona-link');

    expect(newPersonaLink).toHaveAttribute(
      'href',
      `/${PATHS.CREATE_PERSONA}`,
    );
  });
});
