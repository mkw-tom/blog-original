import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string;
const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;

export const getBlogData = async (): Promise<BlogDataType[]> => {
  const client = createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey,
  });

  const response = await client.getList({
    endpoint: endpoint,
  });

  return response.contents;
};
