import { createAuth } from '@keystone-6/auth';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'username',
  secretField: 'password',
  sessionData: 'id isAdmin',
});

export { withAuth };
