import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

const InfoBox = ({
  title,
  cases,
  active,
  isRed,
  version,
  isOrange,
  total,
  ...props
}) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isOrange && "infoBox--orange"}`}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox_cases ${!isRed && "infoBox_cases-green"} ${
            isOrange && "infoBox_cases-orange"
          }`}
        >
          {cases}
        </h2>
        <Typography
          className="infoBox_total"
          color="textSecondary"
        >
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
