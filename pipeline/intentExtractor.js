async function extractIntent(prompt) {

  const text = prompt.toLowerCase();

  const entities = [];
  const features = [];
  const roles = [];

  if (text.includes("doctor")) entities.push("doctors");
  if (text.includes("patient")) entities.push("patients");
  if (text.includes("appointment")) entities.push("appointments");
  if (text.includes("contact")) entities.push("contacts");
  if (text.includes("dashboard")) entities.push("dashboard");

  if (text.includes("login")) features.push("authentication");
  if (text.includes("analytics")) features.push("analytics");
  if (text.includes("payment")) features.push("payments");

  if (text.includes("admin")) roles.push("admin");

  roles.push("user");

  return {
    rawPrompt: prompt,
    entities,
    features,
    roles
  };
}

module.exports = { extractIntent };