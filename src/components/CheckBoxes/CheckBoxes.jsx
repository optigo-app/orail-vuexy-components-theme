import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import {
  ERROR,
  LIGHTERROR,
  LIGHTPRIMARY,
  LIGHTPURPLEPINK,
  LIGHTSECONDARY,
  LIGHTSUCCESS,
  LIGHTWARNING,
  PRIMARY,
  PURPLEPINK,
  SECONDARY,
  SUCCESS,
  WARNING,
} from "../../colorVariables";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CheckBoxes = () => {
  const chstyle = {
    "&.Mui-checked": {
      color: `${PRIMARY}`, // Change the color when checked
    },
    "&.Mui-checked:hover": {
      backgroundColor: `${LIGHTPRIMARY}`, // Change the background color when checked and hovered
    },
  };
  const chstyle2 = {
    "&.Mui-checked": {
      color: `${WARNING}`, // Change the color when checked
    },
    "&.Mui-checked:hover": {
      backgroundColor: `${LIGHTWARNING}`, // Change the background color when checked and hovered
    },
  };
  const chstyle3 = {
    "&.Mui-checked": {
      color: `${SUCCESS}`, // Change the color when checked
    },
    "&.Mui-checked:hover": {
      backgroundColor: `${LIGHTSUCCESS}`, // Change the background color when checked and hovered
    },
  };
  const chstyle4 = {
    "&.Mui-checked": {
      color: `${ERROR}`, // Change the color when checked
    },
    "&.Mui-checked:hover": {
      backgroundColor: `${LIGHTERROR}`, // Change the background color when checked and hovered
    },
  };
  const chstyle5 = {
    "&.Mui-checked": {
      color: `${SECONDARY}`, // Change the color when checked
    },
    "&.Mui-checked:hover": {
      backgroundColor: `${LIGHTSECONDARY}`, // Change the background color when checked and hovered
    },
  };
  const chstyle6 = {
    "&.Mui-checked": {
      color: `${PURPLEPINK}`, // Change the color when checked
    },
    "&.Mui-checked:hover": {
      backgroundColor: `${LIGHTPURPLEPINK} !important`, // Change the background color when checked and hovered
    },
  };
  return (
    <div>
      <div style={{ margin: "1rem" }}>
        <FormGroup row>
          <div>
            <FormControlLabel
              label="Primary"
              control={
                <Checkbox defaultChecked name="color-primary" sx={chstyle} />
              }
              sx={{ color: `${PRIMARY}` }}
            />
            <FormControlLabel
              label="Primary"
              control={
                <Checkbox defaultChecked name="color-primary" sx={chstyle2} />
              }
              sx={{ color: `${WARNING}` }}
            />
            <FormControlLabel
              label="Primary"
              control={
                <Checkbox defaultChecked name="color-primary" sx={chstyle3} />
              }
              sx={{ color: `${SUCCESS}` }}
            />
            <FormControlLabel
              label="Primary"
              control={
                <Checkbox defaultChecked name="color-primary" sx={chstyle4} />
              }
              sx={{ color: `${ERROR}` }}
            />
            <FormControlLabel
              label="Primary"
              control={
                <Checkbox defaultChecked name="color-primary" sx={chstyle5} />
              }
              sx={{ color: `${SECONDARY}` }}
            />
            <FormControlLabel
              label="Star"
              sx={{ color: `${ERROR}` }}
              control={
                <Checkbox
                  defaultChecked
                  name="size-small"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={chstyle4}
                />
              }
            />
            <FormControlLabel
              label="Heart"
              sx={{ color: `${PURPLEPINK}` }}
              control={
                <Checkbox
                  defaultChecked
                  name="size-small"
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon />}
                  sx={chstyle6}
                />
              }
            />
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default CheckBoxes;
