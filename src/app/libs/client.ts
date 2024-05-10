import {createClient} from "microcms-js-sdk";

export const getBlogData = async () => {
  const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;

  const client = createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey, 
  });

  const response = await client.getList({
    customRequestInit: {
     cache: "force-cache", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: endpoint,
   });
  
   return response.contents;
}

