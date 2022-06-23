import { Alert, AlertIcon } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useApiGameDetails } from "../../api/hooks/useApiGameDetails";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import { GameDetails } from "./GameDetails";

export const GameDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useApiGameDetails(id);
  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          Oops! Something went wrong.
        </Alert>
      )}
      {game && <GameDetails game={game} />}
      {isLoading && <LoadingOverlay />}
    </>
  );
};
