# Code Annotations Overview

See specific files listed for more in-depth annotations

## Functionality

### code/api/src/config/database.json

Here we are storing our database configuration

### code/api/src/config/env.js

The file env.js sets our environment. In this case, node.

### code/api/src/config/params.js

We set the params for our modules (users and products) here.

### code/api/src/migrations

In the migrations folder we store our database migrations for our modules. In this case users, products, crates and subscriptions. In each of these migrations we create a database table for the module, along with the columns in that table.

### code/api/src/config/modules

In the modules folder we (1) set the variables and associations for each module's model, we (2) set the mutations we can make (create, update, remove), (3) we set the queries we can make (read), (4) in resolvers.js, we have the functionality for our queries and mutations, and in (5) types.js we create our module in GraphQL.

### code/api/src/config/seeders

In our seeders folder we create seeds (or objects) for our database. We will need to set the seed for subscriptions, which is currently missing.

### code/api/src/config/setup/schema

The schema sets up our migrations in our GraphQL database divided by index, mutations and queries.

We need an image for a user, description for user, shipping address

Shipping address and description must be editable

Subscriptions is a joins table
