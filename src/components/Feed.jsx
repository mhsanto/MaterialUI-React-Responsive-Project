import { Box } from "@mui/material";
import Cards from "./Cards";

import React from "react";

const Feed = () => {
  return (
    <Box flex={2} p={2}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Box>
  );
};

export default Feed;
