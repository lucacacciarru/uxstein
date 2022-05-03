type Params = {
  onSubmit: Function;
  onClose: () => void;
};

export function useActionModal({
  onSubmit,
  onClose,
}: Params) {
  const onClick = () => {
    onSubmit();
    onClose();
  };
  return {
    onClick,
  };
}
