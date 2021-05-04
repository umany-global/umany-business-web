import { fade, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  color1: {
    backgroundColor: theme.palette.companyBlue.main,
    color: "white",
  },
  paperContainer: {
    padding: theme.spacing(4),
    borderRadius: "50%",
    textAlign: "center",
    width: 150,
    height: 150,
  },
}));
