import { Container, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Container maxW="900px">
      <Heading marginY={2}>RAWG - React demo</Heading>

      <Outlet />
    </Container>
  );
};
