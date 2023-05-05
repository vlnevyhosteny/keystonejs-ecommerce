import { createAuth as baseCreateAuth } from '@keystone-6/auth';

const createAuth = (
  options?: Partial<Parameters<typeof baseCreateAuth>>,
): ReturnType<typeof baseCreateAuth> =>
  baseCreateAuth({
    ...options,
    listKey: 'User',
    identityField: 'username',
    secretField: 'password',
    sessionData: 'id isAdmin',
  });

const { withAuth } = createAuth();

export { withAuth, createAuth };
