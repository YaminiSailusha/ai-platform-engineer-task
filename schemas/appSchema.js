const { z } = require("zod");

const AppSchema = z.object({
  appName: z.string(),

  pages: z.array(
    z.object({
      name: z.string(),
      components: z.array(z.string())
    })
  ),

  apis: z.array(
    z.object({
      route: z.string(),
      method: z.string()
    })
  ),

  database: z.array(
    z.object({
      table: z.string(),
      fields: z.array(z.string())
    })
  ),

  auth: z.object({
    roles: z.array(z.string())
  })
});

module.exports = AppSchema;