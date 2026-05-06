# AI Platform Engineer Task

A deterministic multi-stage application generation pipeline that converts natural language requirements into structured, validated, and executable application schemas.

---

# Objective

This project simulates a compiler-style software generation system:

Natural Language
→ Intent Extraction
→ System Design
→ Schema Generation
→ Validation
→ Repair
→ Runtime Simulation

The system is designed to produce predictable, structured, and execution-aware outputs instead of relying on unconstrained generation.

---

# Features

## Multi-Stage Pipeline

- Intent Extraction
- System Design Layer
- Schema Generation
- Validation Engine
- Repair Engine
- Runtime Simulation

---

## Deterministic Structured Generation

The system guarantees:

- Valid JSON output
- Predictable structure
- Schema consistency
- Execution awareness

---

## Validation + Repair System

The validator detects:

- Missing keys
- Invalid schema sections
- Logical inconsistencies
- API/DB mismatches

The repair engine automatically fixes incomplete schemas.

---

## Clarification Handling

The system handles:

- vague prompts
- incomplete prompts
- conflicting requirements

and requests clarification when needed.

---

## Runtime Simulation

Generated outputs are execution-aware through:

- API route simulation
- schema validation
- deployment readiness simulation

---

# Tech Stack

- Node.js
- Express.js
- JavaScript
- Zod
- HTML/CSS

---

# Project Structure

```text
ai-platform-engineer-task/
│
├── pipeline/
│   ├── intentExtractor.js
│   ├── systemDesigner.js
│   ├── schemaGenerator.js
│   ├── validator.js
│   ├── repairEngine.js
│   └── runtimeSimulator.js
│
├── schemas/
│   └── appSchema.js
│
├── evaluation/
│   └── testPrompts.json
│
├── public/
│   ├── index.html
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

---

# Pipeline Architecture

```text
User Prompt
   ↓
Intent Extraction
   ↓
System Design
   ↓
Schema Generation
   ↓
Validation
   ↓
Repair Engine
   ↓
Runtime Simulation
```

---

# Example Prompt

```text
Build a hospital management system with doctors,
patients, appointments, admin analytics,
role-based access and payment support
```

---

# Example Output

```json
{
  "success": true,

  "pipeline": {
    "intentExtraction": "completed",
    "systemDesign": "completed",
    "schemaGeneration": "completed",
    "validation": "passed",
    "runtimeSimulation": "completed"
  },

  "intent": {
    "entities": [
      "doctors",
      "patients",
      "appointments"
    ],

    "features": [
      "analytics",
      "payments"
    ],

    "roles": [
      "admin",
      "user"
    ]
  }
}
```

---

# Evaluation Dataset

The system includes:

- 10 real product prompts
- 10 edge-case prompts

Located in:

```text
evaluation/testPrompts.json
```

---

# Metrics Tracking

The system tracks:

- total requests
- successful generations
- validation failures
- repairs triggered
- clarification requests
- latency

Metrics endpoint:

```text
/metrics
```

---

# Health Check

Health endpoint:

```text
/health
```

---

# Run Locally

## Install dependencies

```bash
npm install
```

---

## Start server

```bash
npm run dev
```

---

## Open application

```text
http://localhost:3000
```

---

# Design Decisions

This project intentionally uses a deterministic modular pipeline instead of relying entirely on unconstrained LLM outputs.

Benefits:

- improved reliability
- predictable structure
- execution consistency
- easier validation and repair
- lower operational cost

---

# Tradeoffs

| Area | Decision |
|---|---|
| Reliability | Deterministic generation |
| Cost | Reduced LLM dependency |
| Latency | Fast rule-based processing |
| Flexibility | Structured schema constraints |

---

# Future Improvements

- Real LLM integration
- Dynamic schema refinement
- Database relation inference
- Frontend code generation
- Deployment automation

---

# Author

AI Platform Engineer Internship Assignment