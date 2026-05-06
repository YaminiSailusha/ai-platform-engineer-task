async function repairSchema(schema, errors) {

  console.log("Repairing schema...");

  if (!schema.auth) {
    schema.auth = {
      roles: ["user"]
    };
  }

  if (!schema.pages || schema.pages.length === 0) {
    schema.pages = [
      {
        name: "Home",
        components: ["Navbar"]
      }
    ];
  }

  return schema;
}

module.exports = { repairSchema };