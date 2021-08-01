import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        p: {
          margin: 0,
        },
      },
    },
  },
});

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px
