import { Router } from 'express';
import { UserRoutes } from '../module/user/user.route';
import { OrderRoutes } from '../module/order/order.route';
import { ProductRoutes } from '../module/product/product.route';
import { AuthRoutes } from '../module/auth/auth.route';
import { CartRoutes } from '../module/addToCart/cart.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/carts',
    route: CartRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;