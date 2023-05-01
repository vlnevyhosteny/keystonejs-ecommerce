import { list } from '@keystone-6/core';
import {
  BaseListTypeInfo,
  MaybePromise,
} from '@keystone-6/core/dist/declarations/src/types';
import {
  BaseAccessArgs,
  AccessOperation,
} from '@keystone-6/core/dist/declarations/src/types/config/access-control';
import { text } from '@keystone-6/core/fields';

const productSchema = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
  },
  access: function (
    args: BaseAccessArgs<BaseListTypeInfo> & { operation: AccessOperation },
  ): MaybePromise<boolean> {
    throw new Error('Function not implemented.');
  },
});

export const product = {
  schema: productSchema,
};
