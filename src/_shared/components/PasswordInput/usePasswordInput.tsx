import { useCallback, useMemo, useState } from 'react';
import { IconComponentModel } from '..';

export function usePasswordInput() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const inputType = useMemo(
    () => (showPassword ? 'text' : 'password'),
    [showPassword],
  );

  const iconName = useMemo(
    () => (showPassword ? 'Hide' : 'Show'),
    [showPassword],
  ) as keyof IconComponentModel;

  const iconColor = useMemo(
    () => (showPassword ? 'black.0' : 'black.50'),
    [showPassword],
  );

  return {
    handleShowPassword,
    inputType,
    iconName,
    iconColor,
  };
}
