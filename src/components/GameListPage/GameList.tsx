import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { GameListResponse } from "../../types/GameListResponse";
import { Card } from "../Card/Card";

type GameListProps = {
  items: GameListResponse[];
};

export const GameList = ({ items }: GameListProps) => {
  if (!items || items.length <= 0) {
    return <>No result.</>;
  }

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap="4"
    >
      {items.map((g, i) => {
        return (
          <GridItem key={g.id} rowSpan={i % 4 === 0 ? 2 : undefined}>
            <GameCard key={g.id} item={g} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

const GameCard = ({ item }: { item: GameListResponse }) => {
  return (
    <Card>
      {item.background_image && (
        <Image
          sx={{ aspectRatio: "16 / 9" }}
          fit={"cover"}
          h="full"
          w="full"
          src={item.background_image}
          alt={`Picture of ${item.name}`}
        />
      )}
      <Card.Details>
        <Box fontSize="xl" fontWeight="semibold" as="h4">
          {item.name}
        </Box>
      </Card.Details>
    </Card>
  );
};
