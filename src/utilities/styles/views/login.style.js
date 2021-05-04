// IMAGES
import logo from "@utilities/images/logo-umany.png";

export default (theme) => ({
  root: {
    "&::before": {
      content: '""',
      position: "absolute",
      display: "block",
      left: "-10%",
      backgroundImage: `url(${logo})`,
      opacity: 0.1,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      filter: "grayscale(100%)",
      height: "100vh",
      width: "100vw",
    },
    height: "100vh",
  },
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
    margin: theme.spacing(8, 4),
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
    margin: theme.spacing(4),
  },
  submit: {
    backgroundColor: "white",
    // margin: theme.spacing(3, 0, 2),
  },
});
