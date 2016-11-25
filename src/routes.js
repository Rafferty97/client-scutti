import { stockItems } from './constants';

let routes = [
  '/',
  '/about',
  '/about/values',
  '/stock',
  '/catering',
  '/contact-us'
];

routes = routes.concat(stockItems.map(item => '/stock/' + item.url));

export default routes;
