import { AttributeName } from '../../store/types';
import { SelectOneSize } from '../StyleFields/SelectOneSize';
import { useProgressBorderField } from './useProgressBorderField';

type Props = {
  styleKey: string;
  blockItemId: string;
  attributeName: AttributeName;
};

export const ProgressBorderField: React.FC<Props> = ({
  blockItemId,
  styleKey,
  attributeName,
}) => {
  const { ...attributeBorder } = useProgressBorderField({
    blockItemId,
    styleKey,
    attributeToUpdate: attributeName,
  });
  return <SelectOneSize {...attributeBorder} />;
};
