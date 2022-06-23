import useSWR from "swr";
import { ApiCacheKey } from "../../types/ApiCacheKey";
import { GameDetailsResponse } from "../../types/GameDetailsResponse";
import { ApiUrls } from "../api";
import { fetcher } from "../fetcher";

/** Load and cache api game by id */
export const useApiGameDetails = (id?: string) => {
  const swr = useSWR<GameDetailsResponse, any, ApiCacheKey | undefined>(
    id
      ? {
          url: ApiUrls.GAME_DETAILS(id),
        }
      : undefined,
    fetcher
  );

  return { ...swr, isLoading: id && !swr.data && !swr.error };
};
