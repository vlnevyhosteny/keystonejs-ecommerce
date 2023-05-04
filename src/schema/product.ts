import { list } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  MaybePromise,
} from '@keystone-6/core/dist/declarations/src/types';
import {
  BaseAccessArgs,
  AccessOperation,
} from '@keystone-6/core/dist/declarations/src/types/config/access-control';
import { decimal, json, text } from '@keystone-6/core/fields';
import { auth } from '../auth';

export interface Product {
  name: string;
  description?: string | undefined;
  price: number;
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
      price: decimal({
        validation: { isRequired: true, min: '0' },
        scale: 2,
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
