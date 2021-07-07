// IMAGES
import logo from "@utilities/images/logo-umany.png";

const styles = {
  main: (theme) => ({
    root: {},
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: "20px 50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      float: "left",
    },
    submit: {
      margin: 2,
      padding: 5,
    },
  }),
  layout: (theme) => ({
    header: {
      position: "relative",
      overflow: "hidden",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      minHeight: "700px",
      width: "100%",
    },

    spacing: {
      padding: "50px 150px",
      [theme.breakpoints.down("sm")]: {
        padding: "50px 20px",
      },
    },
    people2Center: {
      width: "500px",
      [theme.breakpoints.down("sm")]: {
        width: "400px",
      },
    },
    people2: {
      backgroundImage: "images/svg/people2bg.svg",
      backgroundColor: "#f8f8f9",
    },
    peoples: {
      backgroundImage: 'url("images/svg/people2bg.svg")',
      backgroundColor: "#f8f8f9",
      backgroundSize: "80%",
      backgroundRepeat: "no-repeat",
      minHeight: "450px",
    },
    mainHeader: {
      backgroundImage: 'url("images/mainheader.png")',
      backgroundColor: "#f8f8f9",
      [theme.breakpoints.down("sm")]: {
        padding: "200px 0px",
        marginTop: "-70px",
      },
    },

    forgot: {
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "5",
    },

    footerBg: {
      backgroundImage: 'url("images/svg/footer-bg.svg")',
      backgroundPosition: "center center",
      padding: "150px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    imageBox: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "auto",
        height: "900px",
      },
    },
    tutorialBox: {
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
      },
    },
    root: {
      backgroundColor: "#f8f8f9ff",
    },
    headerOver: {
      marginTop: 50,
      [theme.breakpoints.up("sm")]: {
        marginTop: 100,
      },

      position: "absolute",
      width: "100%",
    },
    // Social
    icon: {
      borderRadius: "50%",
      width: 30,
      height: 30,
      margin: 5,
    },
    instagram: {
      backgroundSize: "cover",
      backgroundImage: `url(images/social.png)`,
    },
    facebook: {
      backgroundPosition: "-40px 0",
      backgroundSize: "cover",
      backgroundImage: `url(images/social.png)`,
    },
    twitter: {
      backgroundPosition: "-110px 0",
      backgroundSize: "cover",
      backgroundImage: `url(images/social.png)`,
    },
  }),
};

export default styles;
