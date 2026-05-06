async function generateSchema(design) {

  return {
    appName: "Generated Application",

    pages: design.pages.map(page => ({
      name: page,
      components: ["Navbar", "Sidebar"]
    })),

    apis: design.entities.map(entity => ({
      route: `/api/${entity}`,
      method: "GET"
    })),

    database: design.databaseTables.map(table => ({
      table: table.table,
      fields: ["id", "name", "createdAt"]
    })),

    auth: {
      roles: design.roles
    }
  };
}

module.exports = { generateSchema };