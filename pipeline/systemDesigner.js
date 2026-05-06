async function designSystem(intent) {

  return {
    architecture: "modular",

    pages: [
      "Home",
      "Dashboard",
      "Login"
    ],

    entities: intent.entities,

    roles: intent.roles,

    databaseTables: intent.entities.map(entity => ({
      table: entity,
      primaryKey: "id"
    }))
  };
}

module.exports = { designSystem };