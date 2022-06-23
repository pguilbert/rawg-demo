import { useParams, useSearchParams } from "react-router-dom";
import { useApiGameDetails } from "../../api/hooks/useApiGameDetails";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import { GameDetails } from "./GameDetails";

export const GameDetailsPage = () => {
  const { id } = useParams();
  const { data: game, isLoading } = useApiGameDetails(id);

  return (
    <>
      {game && <GameDetails game={game} />}
      {isLoading && <LoadingOverlay />}
    </>
  );
};
