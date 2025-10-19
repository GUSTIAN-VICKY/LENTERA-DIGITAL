import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'lentera-digital',
  location: 'asia-south1'
};

export const createApplicationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateApplication', inputVars);
}
createApplicationRef.operationName = 'CreateApplication';

export function createApplication(dcOrVars, vars) {
  return executeMutation(createApplicationRef(dcOrVars, vars));
}

export const getMyApplicationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyApplications');
}
getMyApplicationsRef.operationName = 'GetMyApplications';

export function getMyApplications(dc) {
  return executeQuery(getMyApplicationsRef(dc));
}

export const updateDeploymentStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDeploymentStatus', inputVars);
}
updateDeploymentStatusRef.operationName = 'UpdateDeploymentStatus';

export function updateDeploymentStatus(dcOrVars, vars) {
  return executeMutation(updateDeploymentStatusRef(dcOrVars, vars));
}

export const listEnvironmentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEnvironments');
}
listEnvironmentsRef.operationName = 'ListEnvironments';

export function listEnvironments(dc) {
  return executeQuery(listEnvironmentsRef(dc));
}

