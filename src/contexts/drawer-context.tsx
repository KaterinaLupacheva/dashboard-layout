import { createContext, useState, useContext, useMemo } from 'react';

import { IMenuItem } from '../types';
import { MENU_LIST } from '../constants';

type DrawerContextType = {
  isOpened: boolean;
  toggleIsOpened: (value: boolean) => void;
  menu: IMenuItem[];
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
  const [isOpened, toggleIsOpened] = useState(false);

  const value = useMemo(() => ({
    isOpened,
    toggleIsOpened,
    menu: MENU_LIST
  })
  , [isOpened]);

  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider"
    );
  }
  return context;
};
