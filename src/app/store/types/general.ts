import { Layout } from 'react-grid-layout'
import { BlockItemType } from '../../components/AddTab/BlockItem'

export type GridItem = {
    type: BlockItemType;
    attributes: {};
    style: {};
}

export type BuilderState = {
    allIds: string[];
    byId: Record<string, GridItem>;
    pageSettings: Layout[];
}