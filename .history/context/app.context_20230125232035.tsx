import { createContext } from 'react';
import { MenuItem } from '../interfacesFront/menu.interface';
import { TopLevelCategory } from '../interfacesFront/toppage.interface';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });