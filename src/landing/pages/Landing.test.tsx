import { render } from '../../_shared/testConfig/customRender';
import { Landing } from './Landing';
import * as mediaQueryHooks from '@chakra-ui/media-query';

describe('Landing page', () => {
  test('Should be rendered', () => {
    jest.spyOn(mediaQueryHooks, 'useBreakpointValue').mockReturnValue('');
    render(<Landing />);
  });
});
