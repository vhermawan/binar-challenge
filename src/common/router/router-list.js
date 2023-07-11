import LandingPage from '../../module/landingPage';
import CartPage from '../../module/cart';
import SearchPage from '../../module/search';
import { createBrowserRouter } from 'react-router-dom';

const routerList = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
]);

export default routerList;
