import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type ImgCardProp = {
  heading?: string;
  content?: string;
};

const ImgCard = ({ heading, content }: ImgCardProp) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={require("../Assets/img1.svg")}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImgCard;
