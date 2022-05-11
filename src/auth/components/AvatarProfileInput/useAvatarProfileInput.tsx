import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { useAuth } from '../../hooks';
import { getUserProfile } from '../../store/selectors';

export function useAvatarProfileInput() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urlValue, setUrlValue] = useState<string>('');
  const profileInfo = useSelector(getUserProfile);
  const { updateProfile } = useAuth();

  const updateAvatar = useDebouncedCallback(() => {
    updateProfile(profileInfo?.id as string, { avatar: urlValue });
  }, 500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(e.target.value);
    updateAvatar();
  };

  const placeholder = profileInfo?.avatar || '';
  const labelButton = t('auth.profile.avatar.openModalButton');

  return {
    isOpen,
    onOpen,
    onClose,
    onChange,
    urlValue,
    placeholder,
    labelButton,
    avatar: profileInfo?.avatar,
    username: profileInfo?.username,
  };
}
