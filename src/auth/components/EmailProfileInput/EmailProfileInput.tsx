import { ProfileInputWrapper } from '../ProfileInputWrapper';
import { TextInput } from '../../../_shared/components/TextInput';
import { useEmailProfileInput } from './useEmailProfileInput';

export const EmailProfileInput: React.FC = () => {
  const { text, onChange, inputValue, ...rest } = useEmailProfileInput();
  return (
    <ProfileInputWrapper {...rest}>
      <TextInput
        text={text}
        onChange={onChange}
        type="email"
        name="email"
        value={inputValue.email}
      />
    </ProfileInputWrapper>
  );
};
