async function generateApp() {

  const prompt = document.getElementById("prompt").value;

  const output = document.getElementById("output");

  output.textContent = "Generating application schema...";

  try {

    const response = await fetch("/generate", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    output.textContent =
      JSON.stringify(data, null, 2);

  } catch (err) {

    output.textContent =
      "Error generating application";
  }
}