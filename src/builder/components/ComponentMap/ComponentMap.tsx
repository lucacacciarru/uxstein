import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { DraggableBlockType } from '../AddTab/DraggableBlock';
import { CheckboxGridItem } from '../CheckboxGridItem/CheckboxGridItem';
import { ImageGridItem } from '../ImageGridItem/ImageGridItem';
import { ImageListGridItem } from '../ImageListGridItem/ImageListGridItem';
import { ProgressbarGridItem } from '../ProgressBarGridItem/ProgressBarGridItem';
import { RateGridItem } from '../RateGridItem';
import { TextGridItem } from '../TextGridItem/TextGridItem';
import { TextListGridItem } from '../TextListGridItem';

const map: Record<DraggableBlockType, React.FC<any>> = {
  text: TextGridItem,
  progress: ProgressbarGridItem,
  checkbox: CheckboxGridItem,
  'text-list': TextListGridItem,
  rate: RateGridItem,
  image: ImageGridItem,
  'image-list': ImageListGridItem,
};

type Props = {
  id: string;
};

export const ComponentMap: FC<Props> = ({ id }) => {
  const gridItem = useSelector(getGridItemById(id));
  const Component = map[gridItem.type];
  if (!Component) {
    return <DefaultGridItem {...gridItem} id={id} />;
  }
  return <Component {...gridItem} id={id} />;
};

type DefaultGridItemProps = {
  style: Record<string, string>;
  type: string;
  id: string;
};

const DefaultGridItem: FC<DefaultGridItemProps> = ({ style, type, id }) => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
      data-testid="default-grid-item"
    >
      {type}
    </Box>
  );
};
