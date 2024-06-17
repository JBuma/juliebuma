import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/vxfcs45w12a4/environments/development`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_KEY}`,
      },
    }
  );