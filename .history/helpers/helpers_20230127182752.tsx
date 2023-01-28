
import CoursesIcon from './icons/courses.svg';
import BookIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import ServicesIcon from './icons/services.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'service', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'book', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductIcon />, id: TopLevelCategory.Products }
];