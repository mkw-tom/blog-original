import {createClient} from "microcms-js-sdk";
import { getBlogsContntentsDatas } from "../firebase/firestore";

export const getBlogData = async () => {
  const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const client = await createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey, 
    });

  const response = await client.getList({
    endpoint: endpoint,
   });
  
   return response.contents;
}

