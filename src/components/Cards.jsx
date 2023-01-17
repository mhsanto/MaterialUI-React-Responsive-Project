import React from "react";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

const Cards = ({ imageSource, title, name }) => {
  return (
    <Card sx={{ margin: "2rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "pink" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={name}
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="20%"
        image={imageSource}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
