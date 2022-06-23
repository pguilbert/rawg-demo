import { Box, Flex } from "@chakra-ui/react";

export const Card = (props: React.ComponentProps<typeof Flex>) => (
  <Flex
    direction="column"
    overflow="hidden"
    w="full"
    h="full"
    rounded="lg"
    shadow="md"
    borderWidth="1px"
    position="relative"
    {...props}
  />
);

Card.Details = (props: React.ComponentProps<typeof Box>) => (
  <Box p="3" w="full" {...props} />
);
