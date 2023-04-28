import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../Interface/menu.interface";
import { TopLevelCategory } from "../Interface/toppage.interface";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvaider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>) => {
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
