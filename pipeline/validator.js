const AppSchema = require("../schemas/appSchema");

function validateSchema(schema) {

  const result = AppSchema.safeParse(schema);

  const customErrors = [];

  if (!schema.pages || schema.pages.length === 0) {
    customErrors.push("Pages missing");
  }

  if (!schema.auth.roles.includes("user")) {
    customErrors.push("User role missing");
  }

  if (schema.database.length !== schema.apis.length) {
    customErrors.push("API and DB mismatch");
  }

  if (result.success && customErrors.length === 0) {
    return {
      success: true
    };
  }

  return {
    success: false,
    errors: [
      ...customErrors,
      ...(result.error?.errors || [])
    ]
  };
}

module.exports = { validateSchema };