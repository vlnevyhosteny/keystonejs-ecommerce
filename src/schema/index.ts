import { product } from './product';
import { user } from './user';

export { Product } from './product';

export const schema = {
  lists: {
    Product: product.schema(),
    User: user.schema(),
  },
  product,
  user,
};
