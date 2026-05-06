require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { extractIntent } = require("./pipeline/intentExtractor");
const { designSystem } = require("./pipeline/systemDesigner");
const { generateSchema } = require("./pipeline/schemaGenerator");
const { validateSchema } = require("./pipeline/validator");
const { repairSchema } = require("./pipeline/repairEngine");
const { simulateRuntime } = require("./pipeline/runtimeSimulator");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/*
  Evaluation Metrics
*/

const metrics = {
  totalRequests: 0,
  successfulRequests: 0,
  validationFailures: 0,
  repairsTriggered: 0,
  clarificationRequests: 0
};

/*
  Main Generation Endpoint
*/

app.post("/generate", async (req, res) => {

  /*
    Latency Tracking Start
  */

  const startTime = Date.now();

  try {

    metrics.totalRequests++;

    const { prompt } = req.body;

    /*
      Clarification Handling
    */

    if (!prompt || prompt.trim().length < 10) {

      metrics.clarificationRequests++;

      return res.json({
        success: false,
        clarificationNeeded: true,
        message: "Please provide more detailed requirements."
      });
    }

    /*
      Stage 1 — Intent Extraction
    */

    const intent = await extractIntent(prompt);

    /*
      Stage 2 — System Design
    */

    const design = await designSystem(intent);

    /*
      Stage 3 — Schema Generation
    */

    let schema = await generateSchema(design);

    /*
      Stage 4 — Validation
    */

    const validation = validateSchema(schema);

    /*
      Stage 5 — Repair Engine
    */

    if (!validation.success) {

      metrics.validationFailures++;
      metrics.repairsTriggered++;

      schema = await repairSchema(schema, validation.errors);
    }

    /*
      Stage 6 — Runtime Simulation
    */

    const runtime = simulateRuntime(schema);

    metrics.successfulRequests++;

    /*
      Latency Calculation
    */

    const latency = Date.now() - startTime;

    /*
      Final Response
    */

    res.json({
      success: true,

      latency: `${latency}ms`,

      pipeline: {
        intentExtraction: "completed",
        systemDesign: "completed",
        schemaGeneration: "completed",
        validation: validation.success ? "passed" : "repaired",
        runtimeSimulation: "completed"
      },

      intent,
      design,
      schema,
      runtime,

      metrics
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

/*
  Metrics Endpoint
*/

app.get("/metrics", (req, res) => {

  const successRate =
    metrics.totalRequests === 0
      ? 0
      : (
          (metrics.successfulRequests / metrics.totalRequests) * 100
        ).toFixed(2);

  res.json({
    metrics,
    successRate: `${successRate}%`
  });
});

/*
  Health Check Endpoint
*/

app.get("/health", (req, res) => {

  res.json({
    status: "OK",
    message: "AI Platform Engineer Task Running"
  });
});

/*
  Start Server
*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});