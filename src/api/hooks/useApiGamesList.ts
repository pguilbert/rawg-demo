import useSWR, { SWRResponse } from "swr";
import { ApiCacheKey } from "../../types/ApiCacheKey";
import { ApiListResponse } from "../../types/ApiResponse";
import { GameListResponse } from "../../types/GameListResponse";
import { ApiUrls } from "../api";
import { fetcher } from "../fetcher";

type UseApiGamesListOptions = {
  page?: number;
};

/** Load and cache api game list */
export const useApiGamesList = (options: UseApiGamesListOptions) => {
  const swr = useSWR<ApiListResponse<GameListResponse>, any, ApiCacheKey>(
    {
      url: ApiUrls.GAMES_LIST(),
      params: {
        ...(options.page && { page: options.page?.toString() }),
      },
    },
    fetcher
  );

  return { ...swr, isLoading: !swr.data && !swr.error };
};
