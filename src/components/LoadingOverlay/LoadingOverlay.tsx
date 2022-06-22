import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

/* Show a loading indicator over the content. */
export const LoadingOverlay = () => {
  return (
    <LoadingContainer>
      <Spinner mt="50px" size="lg" />
    </LoadingContainer>
  );
};

const LoadingContainer = (props: React.ComponentProps<typeof Box>) => (
  <Box
    sx={{
      minHeight: "100px",
      backgroundColor: "rgba(255, 255, 255, .5)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
    }}
    {...props}
  />
);
