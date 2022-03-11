import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { SelectOneSize, SizesModel } from './SelectOneSize';

type Props = {
  sizes: SizesModel;
  selected: keyof SizesModel;
  select: Function;
  label: string;
};

const MOCK_PROPS: Props = {
  label: 'Any string',
  select: () => {},
  selected: 's',
  sizes: { s: 'any size string', m: 'any size string', l: 'any size string' },
};

describe('SelectOneSize', () => {
  test('should render correctly', () => {
    render(<SelectOneSize {...MOCK_PROPS} />);
  });
  test('should render the empty icon if pass optional "none" property to "sizes"', () => {
    render(
      <SelectOneSize
        {...MOCK_PROPS}
        sizes={{ ...MOCK_PROPS.sizes, none: 'any string size' }}
      />,
    );

    const emptyValueIcon = screen.getByTestId('emptyValue-icon');
    expect(emptyValueIcon).toBeInTheDocument();
  });
  test('should call select() if click on it', () => {
    const select = jest.fn();
    render(
      <SelectOneSize
        {...MOCK_PROPS}
        sizes={{ ...MOCK_PROPS.sizes, none: 'any string size' }}
        select={select}
      />,
    );
    const emptyValueIcon = screen.getByTestId('emptyValue-icon');
    const sizeIcons = screen.getAllByRole('size-button');
    fireEvent.click(sizeIcons[0]);
    fireEvent.click(emptyValueIcon);

    expect(select).toBeCalled();
  });
});
