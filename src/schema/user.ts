import { list } from '@keystone-6/core';
import { checkbox, password, text } from '@keystone-6/core/fields';
import { auth } from '../auth';

export interface User {
  username: string;
  password: string;
  isAdmin: boolean;
}

const schema = () =>
  list({
    fields: {
      username: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      password: password({ validation: { isRequired: true } }),
      isAdmin: checkbox({
        defaultValue: false,
      }),
    },
    access: auth.access.control.onlyAdminCanQueryAndMutate(),
  });

export const user = {
  /**
   * Schema of the user list.
   *
   * **Access**: Only Admin can mutate and read.
   */
  schema,
};
