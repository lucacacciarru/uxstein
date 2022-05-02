import { Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import {
  renderHook,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { AuthState } from '../../store';
import { getUserProfile } from '../../store/selectors';
import { useAvatarProfileInput } from './useAvatarProfileInput';

function useMockHook() {
  const { onChange, urlValue } = useAvatarProfileInput();
  const userAvatar = useSelector(getUserProfile)?.avatar;

  return {
    onChange,
    userAvatar,
    urlValue,
  };
}

const existingId = 'existingId';
const newAvatar = 'newAvatar';

const MOCK_AUTH_STATE: AuthState = {
  profile: {
    email: 'anyEmail',
    id: existingId,
    password: 'anyString',
    username: 'test',
    avatar: '',
  },
};

describe('useAvatarProfileInput', () => {
  test('', async () => {
    const { result } = renderHook(() => useMockHook(), {
      mocks: { auth: MOCK_AUTH_STATE },
    });
    const { onChange, urlValue } = result.current;

    render(<Input onChange={onChange} value={urlValue} data-testid="input" />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: newAvatar } });

    await waitFor(() => {
      expect(result.current.urlValue).toEqual(newAvatar);
    });
  });
});
