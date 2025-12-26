# API Contract: RoboLearn Platform Homepage

## Overview
This document outlines the interface between the RoboLearn homepage and any backend services. Since the homepage is primarily static content, the contracts focus on potential future integrations.

## Endpoints

### GET /api/modules
Retrieve the list of learning modules to display on the homepage

**Request:**
- Method: GET
- Path: /api/modules
- Headers: None required
- Query Parameters: None

**Response:**
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "modules": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "items": ["string"],
      "emoji": "string"
    }
  ]
}
```

### GET /api/roadmap
Retrieve the learning roadmap to display on the homepage

**Request:**
- Method: GET
- Path: /api/roadmap
- Headers: None required
- Query Parameters: None

**Response:**
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "weeks": [
    {
      "startWeek": "number",
      "endWeek": "number",
      "title": "string",
      "description": "string"
    }
  ]
}
```

### GET /api/value-propositions
Retrieve the value propositions for the "Why This Matters" section

**Request:**
- Method: GET
- Path: /api/value-propositions
- Headers: None required
- Query Parameters: None

**Response:**
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "valuePropositions": [
    {
      "id": "string",
      "emoji": "string",
      "title": "string",
      "description": "string"
    }
  ]
}
```

### GET /api/start-options
Retrieve the start options for the "Start Options" section

**Request:**
- Method: GET
- Path: /api/start-options
- Headers: None required
- Query Parameters: None

**Response:**
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "startOptions": [
    {
      "id": "string",
      "emoji": "string",
      "title": "string",
      "description": "string"
    }
  ]
}
```