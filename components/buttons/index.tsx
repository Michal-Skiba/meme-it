import { Button, createStyles, withStyles } from "@material-ui/core";
import { colors } from "styles/colors";

export const ButtonBasic = withStyles(() =>
  createStyles({
    root: {
      color: colors.tertiary,
      background: colors.primary,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      whiteSpace: "nowrap",
      padding: "1px 15px",
      transition: "400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "&:hover": {
        color: colors.tertiary,
        background: colors.secondary,
      },
    },
  })
)(Button)