type StyleTypes = 'fontFamily' | 'fontSize' | 'fontStyle' | 'color' | 'bg' | 'borderColor' | 'borderWidth' | 'borderRadius';

type Size = { b: number; h: number; }
type Sizes = {
    minSize: Size;
    maxSize: Size;
    b: number;
    h: number;
}
type Attribute = {
    name: string;
    style: StyleTypes[];
}

export type ToolBarModel = {
    title: string;
    sizes: Sizes;
    attributes: Attribute[];
}