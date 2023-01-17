import { Box } from "@mui/material";
import Cards from "./Cards";
import IMG1 from "../assets/Akon_day.jpg";
import IMG2 from "../assets/sabbir_day.jpg";
import IMG3 from "../assets/Sayed_day.jpg";
import IMG4 from "../assets/Sazzad.jpg";
import IMG5 from "../assets/shojib.jpg";
import IMG6 from "../assets/Sujon.jpg";
import IMG7 from "../assets/me.jpg";

import React from "react";

const Feed = () => {
  return (
    <Box flex={2} p={2}>
      <Cards
        name="Masum Muzammel"
        imageSource={IMG1}
        title=" This impressive paella is a perfect pa the mussels, if you like"
      />
      <Cards
        name="Sabbir Hossain"
        imageSource={IMG2}
        title=" Happy to be here"
      />
      <Cards name="Abu Sayed" imageSource={IMG3} title="Life is a Joke" />
      <Cards
        name="Sazzad Hossain"
        imageSource={IMG4}
        title="Turned in to a Disappointment"
      />
      <Cards
        name="Ariful Haque"
        imageSource={IMG5}
        title="Success is a Lonely Rood"
      />
      <Cards
        name="Sujon"
        imageSource={IMG6}
        title="Internet make people so comfortable"
      />
      <Cards
        name="Mahmodul Hasan"
        imageSource={IMG7}
        title="where the fuck i am"
      />
    </Box>
  );
};

export default Feed;
