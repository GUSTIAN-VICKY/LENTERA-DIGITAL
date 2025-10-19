# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyApplications*](#getmyapplications)
  - [*ListEnvironments*](#listenvironments)
- [**Mutations**](#mutations)
  - [*CreateApplication*](#createapplication)
  - [*UpdateDeploymentStatus*](#updatedeploymentstatus)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyApplications
You can execute the `GetMyApplications` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyApplications(): QueryPromise<GetMyApplicationsData, undefined>;

interface GetMyApplicationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyApplicationsData, undefined>;
}
export const getMyApplicationsRef: GetMyApplicationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyApplications(dc: DataConnect): QueryPromise<GetMyApplicationsData, undefined>;

interface GetMyApplicationsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyApplicationsData, undefined>;
}
export const getMyApplicationsRef: GetMyApplicationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyApplicationsRef:
```typescript
const name = getMyApplicationsRef.operationName;
console.log(name);
```

### Variables
The `GetMyApplications` query has no variables.
### Return Type
Recall that executing the `GetMyApplications` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyApplicationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyApplicationsData {
  applications: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Application_Key)[];
}
```
### Using `GetMyApplications`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyApplications } from '@dataconnect/generated';


// Call the `getMyApplications()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyApplications();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyApplications(dataConnect);

console.log(data.applications);

// Or, you can use the `Promise` API.
getMyApplications().then((response) => {
  const data = response.data;
  console.log(data.applications);
});
```

### Using `GetMyApplications`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyApplicationsRef } from '@dataconnect/generated';


// Call the `getMyApplicationsRef()` function to get a reference to the query.
const ref = getMyApplicationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyApplicationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.applications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.applications);
});
```

## ListEnvironments
You can execute the `ListEnvironments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listEnvironments(): QueryPromise<ListEnvironmentsData, undefined>;

interface ListEnvironmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEnvironmentsData, undefined>;
}
export const listEnvironmentsRef: ListEnvironmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listEnvironments(dc: DataConnect): QueryPromise<ListEnvironmentsData, undefined>;

interface ListEnvironmentsRef {
  ...
  (dc: DataConnect): QueryRef<ListEnvironmentsData, undefined>;
}
export const listEnvironmentsRef: ListEnvironmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listEnvironmentsRef:
```typescript
const name = listEnvironmentsRef.operationName;
console.log(name);
```

### Variables
The `ListEnvironments` query has no variables.
### Return Type
Recall that executing the `ListEnvironments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListEnvironmentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListEnvironmentsData {
  environments: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Environment_Key)[];
}
```
### Using `ListEnvironments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listEnvironments } from '@dataconnect/generated';


// Call the `listEnvironments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listEnvironments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listEnvironments(dataConnect);

console.log(data.environments);

// Or, you can use the `Promise` API.
listEnvironments().then((response) => {
  const data = response.data;
  console.log(data.environments);
});
```

### Using `ListEnvironments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listEnvironmentsRef } from '@dataconnect/generated';


// Call the `listEnvironmentsRef()` function to get a reference to the query.
const ref = listEnvironmentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listEnvironmentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.environments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.environments);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateApplication
You can execute the `CreateApplication` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createApplication(vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface CreateApplicationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
}
export const createApplicationRef: CreateApplicationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createApplication(dc: DataConnect, vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface CreateApplicationRef {
  ...
  (dc: DataConnect, vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
}
export const createApplicationRef: CreateApplicationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createApplicationRef:
```typescript
const name = createApplicationRef.operationName;
console.log(name);
```

### Variables
The `CreateApplication` mutation requires an argument of type `CreateApplicationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateApplicationVariables {
  name: string;
  description: string;
}
```
### Return Type
Recall that executing the `CreateApplication` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateApplicationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateApplicationData {
  application_insert: Application_Key;
}
```
### Using `CreateApplication`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createApplication, CreateApplicationVariables } from '@dataconnect/generated';

// The `CreateApplication` mutation requires an argument of type `CreateApplicationVariables`:
const createApplicationVars: CreateApplicationVariables = {
  name: ..., 
  description: ..., 
};

// Call the `createApplication()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createApplication(createApplicationVars);
// Variables can be defined inline as well.
const { data } = await createApplication({ name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createApplication(dataConnect, createApplicationVars);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
createApplication(createApplicationVars).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

### Using `CreateApplication`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createApplicationRef, CreateApplicationVariables } from '@dataconnect/generated';

// The `CreateApplication` mutation requires an argument of type `CreateApplicationVariables`:
const createApplicationVars: CreateApplicationVariables = {
  name: ..., 
  description: ..., 
};

// Call the `createApplicationRef()` function to get a reference to the mutation.
const ref = createApplicationRef(createApplicationVars);
// Variables can be defined inline as well.
const ref = createApplicationRef({ name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createApplicationRef(dataConnect, createApplicationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

## UpdateDeploymentStatus
You can execute the `UpdateDeploymentStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDeploymentStatus(vars: UpdateDeploymentStatusVariables): MutationPromise<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;

interface UpdateDeploymentStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDeploymentStatusVariables): MutationRef<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;
}
export const updateDeploymentStatusRef: UpdateDeploymentStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDeploymentStatus(dc: DataConnect, vars: UpdateDeploymentStatusVariables): MutationPromise<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;

interface UpdateDeploymentStatusRef {
  ...
  (dc: DataConnect, vars: UpdateDeploymentStatusVariables): MutationRef<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;
}
export const updateDeploymentStatusRef: UpdateDeploymentStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDeploymentStatusRef:
```typescript
const name = updateDeploymentStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateDeploymentStatus` mutation requires an argument of type `UpdateDeploymentStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDeploymentStatusVariables {
  id: UUIDString;
  statusId: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateDeploymentStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDeploymentStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDeploymentStatusData {
  deployment_update?: Deployment_Key | null;
}
```
### Using `UpdateDeploymentStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDeploymentStatus, UpdateDeploymentStatusVariables } from '@dataconnect/generated';

// The `UpdateDeploymentStatus` mutation requires an argument of type `UpdateDeploymentStatusVariables`:
const updateDeploymentStatusVars: UpdateDeploymentStatusVariables = {
  id: ..., 
  statusId: ..., 
};

// Call the `updateDeploymentStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDeploymentStatus(updateDeploymentStatusVars);
// Variables can be defined inline as well.
const { data } = await updateDeploymentStatus({ id: ..., statusId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDeploymentStatus(dataConnect, updateDeploymentStatusVars);

console.log(data.deployment_update);

// Or, you can use the `Promise` API.
updateDeploymentStatus(updateDeploymentStatusVars).then((response) => {
  const data = response.data;
  console.log(data.deployment_update);
});
```

### Using `UpdateDeploymentStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDeploymentStatusRef, UpdateDeploymentStatusVariables } from '@dataconnect/generated';

// The `UpdateDeploymentStatus` mutation requires an argument of type `UpdateDeploymentStatusVariables`:
const updateDeploymentStatusVars: UpdateDeploymentStatusVariables = {
  id: ..., 
  statusId: ..., 
};

// Call the `updateDeploymentStatusRef()` function to get a reference to the mutation.
const ref = updateDeploymentStatusRef(updateDeploymentStatusVars);
// Variables can be defined inline as well.
const ref = updateDeploymentStatusRef({ id: ..., statusId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDeploymentStatusRef(dataConnect, updateDeploymentStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.deployment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.deployment_update);
});
```

