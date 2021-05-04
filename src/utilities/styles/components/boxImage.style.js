import { fade, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(4, 4),
    width: 400,
  },
  content: {
    padding: theme.spacing(0, 2),
    width: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  circle: {
    borderRadius: "50%",
    border: "1px solid gray",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: 'center ',
    backgroundRepeat: "no-repeat",
    outline: 0,
    padding: 15,
    backgroundColor: "gray",
    color: "white",
    justifyContent: "center",
    lineHeight: 1,
    width: 170,
    height: 120,
  },
}));
