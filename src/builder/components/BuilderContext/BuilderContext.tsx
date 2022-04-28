import { createContext, useRef, useState } from 'react';

type ContentContext = {
  exportItemRef: React.RefObject<HTMLElement> | null;
  showGridPlaceholder: boolean;
  setShowGridPlaceholder: Function;
};

export const BuilderContext = createContext<ContentContext>({
  exportItemRef: null,
  showGridPlaceholder: false,
  setShowGridPlaceholder: () => {},
});

export const BuilderProvider: React.FC = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [showGridPlaceholder, setShowGridPlaceholder] =
    useState<boolean>(false);

  return (
    <BuilderContext.Provider
      value={{
        exportItemRef: ref,
        showGridPlaceholder,
        setShowGridPlaceholder,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
