import { Button, createStyles, withStyles } from "@material-ui/core";
import { CSSProperties } from "react";
import { colors } from "styles/colors";

const buttonMainStyles: CSSProperties = {
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  whiteSpace: "nowrap",
  padding: "5px 15px",
  transition: "400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
}

export const ButtonPrimary = withStyles(() =>
  createStyles({
    root: {
      ...buttonMainStyles,
      color: colors.tertiary,
      background: colors.primary,
      "&:hover": {
        color: colors.tertiary,
        background: colors.secondary,
      },
    },
  })
)(Button);

export const ButtonSecondary = withStyles(() =>
  createStyles({
    root: {
      ...buttonMainStyles,
      color: colors.primary,
      background: colors.tertiary,
    },
  })
)(Button)