import { CodegenConfig } from "@graphql-codegen/cli";

require("dotenv").config();

console.log(process.env.CONTENTFUL_KEY);

const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const spaceID = "vxfcs45w12a4";
const contentfulEnvironment = process.env.CONTENTFUL_ENV ?? "master";
const productionEndpoint = "https://graphql.contentful.com/content/v1/spaces";
export const endpoint = `${
  endpointOverride || productionEndpoint
  }/${spaceID}/environments/${contentfulEnvironment}`;
console.log(endpoint)
export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || ""]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_KEY}`,
        },
      },
    },
  ],
  generates: {
    "src/lib/__generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/lib/__generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "src/lib/__generated/sdk.ts": {
      documents: ["src/lib/graphql/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: "combine",
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};

export default config;
