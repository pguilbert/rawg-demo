import {
  Heading,
  VStack,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Box,
} from "@chakra-ui/react";
import { GameDetailsResponse } from "../../types/GameDetailsResponse";

type GameDetailsProps = {
  game: GameDetailsResponse;
};

export const GameDetails = ({ game }: GameDetailsProps) => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4}>
      <Heading size="lg">{game.name}</Heading>
      {game.reddit_description && <Text>{game.reddit_description}</Text>}
      <Box>
        Links:
        <UnorderedList>
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
