import { list } from '@keystone-6/core';
import { float, json, text } from '@keystone-6/core/fields';
import { auth } from '../auth';

export interface Product {
  name: string;
  description?: string | undefined;
  price?: number | undefined;
  code?: string | undefined;
  meta?: Record<string, any> | undefined;
}

const schema = () =>
  list({
    fields: {
      name: text({
        validation: { isRequired: true, length: { max: 80 } },
        isIndexed: true,
      }),
      description: text({
        validation: { isRequired: false },
        db: { isNullable: true },
        ui: { displayMode: 'textarea' },
      }),
      price: float({
        validation: { min: 0 },
        isIndexed: true,
      }),
      code: text(),
      meta: json(),
    },
    access: auth.access.control.onlyAdminCanMutateAndAnonymousCanRead(),
  });

export const product = {
  /**
   * Schema of the product list.
   *
   * **Access**: Only Admin can mutate and Anonymous can read.
   */
  schema,
};
