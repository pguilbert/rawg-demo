const addBaseUrl = (urlPart: string) => ApiConfigs.BASE_URL + urlPart;

export const ApiUrls = {
  GAMES_LIST: () => addBaseUrl("/games"),
  GAME_DETAILS: (gameId: string) => addBaseUrl(`/games/${gameId}`),
};

export const ApiConfigs = {
  BASE_URL: "https://api.rawg.io/api",
  API_SECRET: "a924cdc2c2fc429a80a77765838301ea", //TODO PGU: Remove this from source control.
};
