import { ProfileInputWrapper } from '../ProfileInputWrapper';
import { TextInput } from '../../../_shared/components/TextInput';
import { useUsernameProfileInput } from './useUsernameProfileInput';

export const UsernameProfileInput: React.FC = () => {
  const { onChange, text, inputValue, ...rest } = useUsernameProfileInput();
  return (
    <ProfileInputWrapper {...rest}>
      <TextInput
        onChange={onChange}
        text={text}
        name="username"
        value={inputValue.username}
      />
    </ProfileInputWrapper>
  );
};
