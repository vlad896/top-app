import { createContext, ReactNode, useState } from 'react';
import { MenuItem } from '../interfacesFront/menu.interface';
import { TopLevelCategory } from '../interfacesFront/toppage.interface';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenyState] = useState<MenuItem[]>(menu);


	return <AppContext.Provider value={{ menu: menuState }}>
		{children}
	</AppContext.Provider>;
};