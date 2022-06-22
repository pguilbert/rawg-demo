import { ApiCacheKey } from "../types/ApiCacheKey";
import { ApiConfigs } from "./api";

/** Revalidate api call with the API key. See https://swr.vercel.app/docs/data-fetching */
export const fetcher = (cacheKey: ApiCacheKey) => {
  const url = new URL(cacheKey.url);

  for (const key in cacheKey.params ?? []) {
    url.searchParams.set(key, cacheKey.params![key]);
  }

  url.searchParams.set("key", ApiConfigs.API_SECRET);

  return fetch(url).then((res) => res.json());
};
