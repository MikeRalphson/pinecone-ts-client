# Pinecone Typescript Client

This is the Typescript client for Pinecone. It is a wrapper around the Pinecone OpenAPI spec.

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Npm package version](https://badgen.net/npm/v/pinecone-ts-client)](https://npmjs.com/package/pinecone-ts-client)

## Installation

```
npm install pinecone-ts-client
```

## Usage

Set the following environment variables:

```bash
export PINECONE_API_KEY=your_api_key
export PINECONE_INDEX=your_index
export PINECONE_ENVIRONMENT=your_environment
```

## Initializing the client

```typescript
import { PineconeClient } from "pinecone-ts-client";

// Create a client
const client = new PineconeClient();

// Initialize the client
await client.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});
```

## Control plane operations

The Pinecone control plane allows you to perform the following operations:

1. Create, configure and delete indexes
2. Get information about an existing indexes
3. Create and delete collections
4. Select an index to operate on

## Indexes

### Create Index

```ts
const createRequest: CreateRequest = {
  name: indexName,
  dimension: dimensions,
  metric,
};

await client.createIndex(createRequest);
```

### Delete Index

```ts
await client.deleteIndex(indexName);
```

### Describe Index

```ts
const indexDescription = await client.describeIndex(indexName);
```

Example result:

```json
{}
```

### List Indexes

```ts
const list = await client.listIndexes();
```

Example result:

```json
["index1", "index2"]
```

### Select an index

To operate on an index, you must select it. This is done by calling the `Index` method on the client.

```ts
const index = client.Index(indexName);
```

## Collections

### Create Collection

```ts
const createCollectionRequest: CreateCollectionRequest = {
  name: collection,
  source: indexName,
};
await client.createCollection(createCollectionRequest);
```

### Delete Collection

```ts
await client.deleteCollection(collection);
```

### Describe Collection

```ts
const describeCollection = await client.describeCollection(collection);
```

Example result:

```json
{}
```

### List Collections

```ts
const list = await client.listCollections();
```

Example result:

```json
["collection1", "collection2"]
```

## Index operations

The Pinecone index operations allow you to perform the following operations instances of `Vector`.

A `Vector` is defined as follows:

```ts
type Vector = {
  id: string;
  values: number[];
  metadata?: object;
};
```

After selecting an index to operate on, you can:

#### 1. Upsert vectors

```ts
const upsertRequest: UpsertRequest = {
  vectors,
  namespace,
};
await index.upsert(upsertRequest);
```

2. Query for vectors

```ts
const vectors = [...] // array of vectors

const queryRequest: QueryRequest = {
  topK: 1,
  vector,
  namespace
}

const queryResponse = await index.query(queryRequest)
```

3. Update a specific vector

```ts
const updateRequest: UpdateRequest = {
  id: vectorId, // the ID of the vector to update
  values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // the new vector values
  setMetadata: metadata, // the new metadata
  namespace,
};
await index.update(updateRequest);
```

4. Fetch vectors by their IDs

```ts
const fetchResult = await index.fetch([vectorIDs], namespace);
```

5. Delete vectors

```ts
await index.delete1([vectorIDs], false, namespace);
```

6. Delete all vectors in a namespace

```ts
await index.delete1([], true, namespace);
```