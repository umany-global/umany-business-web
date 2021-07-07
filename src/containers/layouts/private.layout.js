// // STYLES
// import DashboardStyle from "@utilities/styles/views/dashboard.style";

// // COMPONENTS
// import Header from "@components/commons/Header";

// LIBS
import React from "react";
import clsx from "clsx";
import { confirmAlert } from "react-confirm-alert"; // Import
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/auth";

// COMPONENTS
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// ACTIONS
import { AUTH_LOGOUT } from "@utilities/redux/actions/constants";

// ACTIONS CREATORS
import {
  getBrand,
  getBrandOrders,
} from "@utilities/redux/actions/brand.creators";
import { handleMessage } from "@utilities/redux/actions/message.creators";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// IMAGES
import logo from "@utilities/images/logo-umany.png";

// CONSTANTS
const drawerWidth = 240;

// PRIVATE FUNCTIONS
const handleFMessage = async ({ id }, creators) => {
  const messaging = firebase.messaging();
  await messaging.requestPermission();
  if (firebase.messaging.isSupported()) {
    console.log("Push Notifications initiate");
    messaging.onMessage((msg) => {
      creators(id);
      handleMessage({
        text: msg.notification.title,
        open: true,
        type: "success",
      });
    });
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonHidden: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9),
    // },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = ({
  children,
  dispatch,
  initBrand,
  initBrandList,
  logout,
  brands,
}) => {
  const { current } = brands;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    initBrand();
    handleFMessage(current, initBrandList);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    confirmAlert({
      title: "Umany info",
      message: "Are you sure to logout.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            await firebase.auth().signOut();
            logout();
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justify="space-between" style={{ margin: "0 20px" }}>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Umany empresas
            </Typography>
            <IconButton
              onClick={handleLogout}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Typography style={{ paddingRight: 10 }} variant="h6" gutterBottom>
              Sign Out
            </Typography> */}
              <Tooltip title="Logout" aria-label="add">
                <ExitToAppIcon />
              </Tooltip>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            wrap="nowrap"
          >
            <Avatar alt="Remy Sharp" src={logo} />

            <Typography component="h1" variant="h6" noWrap>
              Umany
            </Typography>
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          <MenuList />
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: AUTH_LOGOUT, payload: {} });
    },
    initBrandList: (brandId) => {
      dispatch(getBrandOrders(brandId));
    },
    initBrand: (data) => {
      dispatch(getBrand(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
