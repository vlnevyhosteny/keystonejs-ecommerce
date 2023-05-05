# KeystoneJS E-commerce

This is an e-commerce platform built using KeystoneJS. It is designed to be easily customizable and extendable to meet the needs of different e-commerce applications.

## How to Install

To use this library, you'll need to have Node.js and NPM (or Yarn) installed on your machine. You can install it using the following commands:

```shell
# Using NPM
npm install --save keystonejs-ecommerce

# Using Yarn
yarn add keystonejs-ecommerce
```

## Documentantion

### Auth

Auth function with predefined options for using with User list.

#### withAuth

It calls `createAuth` from `@keyjstone/core` with these predefined options:

- listKey
- identityField
- secretField
- sessionData

```typescript
// keystone.ts

import { auth } from 'keystonejs-ecommerce';

export default auth.withAuth(
  config({
    db, // ...db config
    lists, // ...list config
    session, // ...session config
    // ...etc
  }),
);
```

#### createAuth

Overrides `createAuth` from `@keyjstone/core` with optional parameters with predefined options (see [withAuth](#withauth)).

```typescript
// keystone.ts

import { auth } from 'keystonejs-ecommerce';

export default auth
  .createAuth({
    initFirstItem: { fields: ['username', 'password', 'isAdmin'] },
  })
  .withAuth(
    config({
      db, // ...db config
      lists, // ...list config
      session, // ...session config
      // ...etc
    }),
  );
```

### Schema

![schema diagram](docs/schema.png)

To import list:

```typescript
// keystone.ts

import { auth, schema } from 'keystonejs-ecommerce';

export default auth.withAuth(
  config({
    // ...
    lists: {
      ...schema.lists,
      // ...your lists
    },
    // ...
  }),
);
```
