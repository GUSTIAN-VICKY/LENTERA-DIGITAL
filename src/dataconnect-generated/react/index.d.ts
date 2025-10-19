import { CreateApplicationData, CreateApplicationVariables, GetMyApplicationsData, UpdateDeploymentStatusData, UpdateDeploymentStatusVariables, ListEnvironmentsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateApplication(options?: useDataConnectMutationOptions<CreateApplicationData, FirebaseError, CreateApplicationVariables>): UseDataConnectMutationResult<CreateApplicationData, CreateApplicationVariables>;
export function useCreateApplication(dc: DataConnect, options?: useDataConnectMutationOptions<CreateApplicationData, FirebaseError, CreateApplicationVariables>): UseDataConnectMutationResult<CreateApplicationData, CreateApplicationVariables>;

export function useGetMyApplications(options?: useDataConnectQueryOptions<GetMyApplicationsData>): UseDataConnectQueryResult<GetMyApplicationsData, undefined>;
export function useGetMyApplications(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyApplicationsData>): UseDataConnectQueryResult<GetMyApplicationsData, undefined>;

export function useUpdateDeploymentStatus(options?: useDataConnectMutationOptions<UpdateDeploymentStatusData, FirebaseError, UpdateDeploymentStatusVariables>): UseDataConnectMutationResult<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;
export function useUpdateDeploymentStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDeploymentStatusData, FirebaseError, UpdateDeploymentStatusVariables>): UseDataConnectMutationResult<UpdateDeploymentStatusData, UpdateDeploymentStatusVariables>;

export function useListEnvironments(options?: useDataConnectQueryOptions<ListEnvironmentsData>): UseDataConnectQueryResult<ListEnvironmentsData, undefined>;
export function useListEnvironments(dc: DataConnect, options?: useDataConnectQueryOptions<ListEnvironmentsData>): UseDataConnectQueryResult<ListEnvironmentsData, undefined>;
