import { OptionBlock } from './OptionBlock';
import { ResizeHandle } from './ResizeHandle';
import { useHandles } from './useHandles';

type Props = {
  id: string;
  bg?: string;
};

export const Handles: React.FC<Props> = ({ bg = '#fff', id }) => {
  const { containerBackgroundColor, iconColor } = useHandles(bg);

  return (
    <>
      <ResizeHandle color={iconColor} />
      <OptionBlock
        id={id}
        backgroundColor={containerBackgroundColor}
        iconColor={iconColor}
      />
    </>
  );
};
