import { Layout } from 'react-grid-layout';

export function deleteItemInsideList(list: Layout[], id: string): Layout[] {
  return list.filter(item => item.i !== id);
}
