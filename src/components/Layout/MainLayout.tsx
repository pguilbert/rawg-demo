import { Container, Divider, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Container maxW="900px">
      <Link to="/">
        <Heading as="h1" marginY={2}>
          RAWG - React demo
        </Heading>
      </Link>

      <Divider marginBottom="6" />

      <Outlet />
    </Container>
  );
};
