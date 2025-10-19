import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface CreateApplicationData {
  application_insert: Application_Key;
}

export interface CreateApplicationVariables {
  name: string;
  description: string;
}

export interface DeploymentStatus_Key {
  id: UUIDString;
  __typename?: 'DeploymentStatus_Key';
}

export interface Deployment_Key {
  id: UUIDString;
  __typename?: 'Deployment_Key';
}

export interface Environment_Key {
  id: UUIDString;
  __typename?: 'Environment_Key';
}

export interface GetMyApplicationsData {
  applications: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Application_Key)[];
}

export interface ListEnvironmentsData {
  environments: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
  } & Environment_Key)[];
}

export interface UpdateDeploymentStatusData {
  deployment_update?: Deployment_Key | null;
}

export interface UpdateDeploymentStatusVariables {
  id: UUIDString;
  statusId: UUIDString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateApplicationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
  operationName: string;
}
export const createApplicationRef: CreateApplicationRef;

export function createApplication(vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;
export function createApplication(dc: DataConnect, vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface GetMyApplicationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyApplicationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyApplicationsData, undefined>;
  operationName: string;
}
export const getMyApplicationsRef: GetMyApplicationsRef;

export function getMyApplications(): QueryPromise<GetMyApplicationsData, undefined>;
export function getMyApplications(dc: DataConnect): QueryPromise<GetMyApplicationsData, undefined>;

interface UpdateDeploymentStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDeploymentStatusVariables): MutationRef<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDeploymentStatusVariables): MutationRef<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;
  operationName: string;
}
export const updateDeploymentStatusRef: UpdateDeploymentStatusRef;

export function updateDeploymentStatus(vars: UpdateDeploymentStatusVariables): MutationPromise<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;
export function updateDeploymentStatus(dc: DataConnect, vars: UpdateDeploymentStatusVariables): MutationPromise<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;

interface ListEnvironmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEnvironmentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEnvironmentsData, undefined>;
  operationName: string;
}
export const listEnvironmentsRef: ListEnvironmentsRef;

export function listEnvironments(): QueryPromise<ListEnvironmentsData, undefined>;
export function listEnvironments(dc: DataConnect): QueryPromise<ListEnvironmentsData, undefined>;

