import { BaseListTypeInfo, ListAccessControl } from '@keystone-6/core/types';
import { Session } from './session';

const isUser = ({ session }: { session: Session }) => !!session?.data.id;

const isAdmin = ({ session }: { session: Session }) => session?.data.isAdmin;

const isAnonymous = () => true;

const onlyAdminCanQueryAndMutate = <
  ListTypeInfo extends BaseListTypeInfo,
>(): ListAccessControl<ListTypeInfo> => ({
  operation: {
    query: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
});

const onlyAdminCanMutateAndAnonymousCanRead = <
  ListTypeInfo extends BaseListTypeInfo,
>(): ListAccessControl<ListTypeInfo> => ({
  operation: {
    query: isAnonymous,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
});

export const access = {
  /**
   * True if the user is logged in.
   */
  isUser,
  /** True if the user is admin. */
  isAdmin,
  /**
   * Always true.
   */
  isAnonymous,
  control: {
    onlyAdminCanQueryAndMutate,
    onlyAdminCanMutateAndAnonymousCanRead,
  },
};
