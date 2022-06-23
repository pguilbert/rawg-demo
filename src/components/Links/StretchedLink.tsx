import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const StretchedLink = (
  props: React.ComponentProps<typeof RouterLink>
) => (
  <Link
    sx={{
      "&:after": {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        content: '""',
      },
    }}
    as={RouterLink}
    {...props}
  />
);
