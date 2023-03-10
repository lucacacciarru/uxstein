import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { DraggableBlockType } from '../AddTab/DraggableBlock';
import { CheckboxGridItem } from '../CheckboxGridItem/CheckboxGridItem';
import { GridItemWrapper } from '../GridItemWrapper/GridItemWrapper';
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
  const Component = gridItem ? map[gridItem.type] : undefined;
  if (!Component) {
    return <></>;
  }
  return (
    <GridItemWrapper style={gridItem.style} id={id}>
      <Component {...gridItem} id={id} />
    </GridItemWrapper>
  );
};
