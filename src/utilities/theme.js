import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "20px",
        margin: "5px",
      },
    },
    MuiAppBar: {
      root: {
        color: "#ffff !important",
        backgroundColor: "#61ccdb !important",
      },
    },
    MuiInputLabel: {
      root: {
        margin: "10px",
      },
    },
  },
  palette: {
    text: {
      primary: "#808080",
    },
    primary: {
      main: "#371880",
    },
    secondary: {
      main: "#fbac03",
      contrastText: "#fff",
    },
    companyBlue: {
      main: "#65CFE9",
      contrastText: "#fff",
    },
    companyDefault: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
