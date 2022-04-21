import { createContext, useRef } from 'react';

type ContentContext = {
  exportItemRef: React.RefObject<HTMLElement> | null;
};

export const BuilderContext = createContext<ContentContext>({
  exportItemRef: null,
});

export const BuilderProvider: React.FC = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null);
  return (
    <BuilderContext.Provider value={{ exportItemRef: ref }}>
      {children}
    </BuilderContext.Provider>
  );
};
