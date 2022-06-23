import {
  Heading,
  VStack,
  Image,
  UnorderedList,
  ListItem,
  Link,
  Box,
} from "@chakra-ui/react";
import { GameDetailsResponse } from "../../types/GameDetailsResponse";

type GameDetailsProps = {
  game: GameDetailsResponse;
};

export const GameDetails: React.FC<GameDetailsProps> = ({
  game,
}: GameDetailsProps) => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4}>
      <Heading size="lg">{game.name}</Heading>
      <Box>
        Links:
        <UnorderedList>
          {game.website && (
            <ListItem>
              <Link href={game.website} isExternal>
                Website
              </Link>
            </ListItem>
          )}
          {game.reddit_url && (
            <ListItem>
              <Link href={game.reddit_url} isExternal>
                Reddit
              </Link>
            </ListItem>
          )}
          {game.metacritic_url && (
            <ListItem>
              <Link href={game.metacritic_url} isExternal>
                Metacritic
              </Link>
            </ListItem>
          )}
        </UnorderedList>
      </Box>

      {game.background_image && (
        <Image
          sx={{ aspectRatio: "16/9" }}
          fit={"cover"}
          h="full"
          w="full"
          src={game.background_image}
          alt={`Picture of ${game.name}`}
        />
      )}
    </VStack>
  );
};
