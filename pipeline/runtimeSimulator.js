function simulateRuntime(schema) {

  const routes = schema.apis.map(api => ({
    endpoint: api.route,
    method: api.method,
    status: "READY"
  }));

  return {
    executable: true,

    generatedRoutes: routes,

    totalPages: schema.pages.length,

    databaseTables: schema.database.length,

    authEnabled: true,

    deploymentStatus: "SIMULATED_READY"
  };
}

module.exports = { simulateRuntime };