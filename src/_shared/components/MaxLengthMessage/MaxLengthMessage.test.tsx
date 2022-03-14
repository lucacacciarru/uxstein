import { FormControl } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { MaxLengthMessage } from './MaxLengthMessage';

describe('MaxLengthMessage component', () => {
  test('Should be rendered', () => {
    render(
      <FormControl>
        <MaxLengthMessage maxLength={10} selectString="Test" />
      </FormControl>,
    );
  });
});
