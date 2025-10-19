const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'lentera-digital',
  location: 'asia-south1'
};
exports.connectorConfig = connectorConfig;

const createApplicationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateApplication', inputVars);
}
createApplicationRef.operationName = 'CreateApplication';
exports.createApplicationRef = createApplicationRef;

exports.createApplication = function createApplication(dcOrVars, vars) {
  return executeMutation(createApplicationRef(dcOrVars, vars));
};

const getMyApplicationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyApplications');
}
getMyApplicationsRef.operationName = 'GetMyApplications';
exports.getMyApplicationsRef = getMyApplicationsRef;

exports.getMyApplications = function getMyApplications(dc) {
  return executeQuery(getMyApplicationsRef(dc));
};

const updateDeploymentStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDeploymentStatus', inputVars);
}
updateDeploymentStatusRef.operationName = 'UpdateDeploymentStatus';
exports.updateDeploymentStatusRef = updateDeploymentStatusRef;

exports.updateDeploymentStatus = function updateDeploymentStatus(dcOrVars, vars) {
  return executeMutation(updateDeploymentStatusRef(dcOrVars, vars));
};

const listEnvironmentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEnvironments');
}
listEnvironmentsRef.operationName = 'ListEnvironments';
exports.listEnvironmentsRef = listEnvironmentsRef;

exports.listEnvironments = function listEnvironments(dc) {
  return executeQuery(listEnvironmentsRef(dc));
};
