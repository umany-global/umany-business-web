import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        margin: 0,
        padding: 0,
      },
      h6: {
        fontWeight: "bold",
        lineHeight: 1.3,
        fontSize: "1rem",
      },
      body2: {
        fontWeight: "bold",
        margin: "5px 0",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "20px",
        margin: "5px",
        padding: 0,
        fontWeight: "bold",
      },
      label: {
        padding: "0 10px",
      },
    },

    MuiIconButton: {
      root: {
        padding: 0,
      },
    },

    MuiAppBar: {
      root: {
        color: "#ffff !important",
        backgroundColor: "#61ccdb !important",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
  },
  palette: {
    text: {
      primary: "#808080",
    },
    primary: {
      main: "#5d8fb7",
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

theme.typography.h1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

export default theme;
