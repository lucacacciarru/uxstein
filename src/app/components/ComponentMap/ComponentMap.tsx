import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getGridItemById } from '../../store/selectors/getGridItemById';
import { TextGridItem } from '../TextGridItem/TextGridItem';
const map: Record<string, any> = {
  text: TextGridItem,
};

type Props = {
  id: string;
};

export const ComponentMap: FC<Props> = ({ id }) => {
  const gridItem = useSelector(getGridItemById(id));
  const Component = map[gridItem.type];
  if (!Component) {
    return <DefaultGridItem {...gridItem} />;
  }
  return <Component {...gridItem} />;
};

type DefaultGridItemProps = {
  style: {};
  type: string;
};

const DefaultGridItem: FC<DefaultGridItemProps> = ({ style, type }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      {type}
    </div>
  );
};
