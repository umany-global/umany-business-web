import React from "react";
import { compose } from "redux";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";

// LIB COMPONENTS
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";

// import Button from "@material-ui/core/Button";
import ReactPlayer from "react-player";

// STYLES
import LoginStyle from "@utilities/styles/views/login.style";
const LoginLayout = (props) => {
  const { classes, t, children } = props;
  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "4em" }}
        className={classes.spacing}
      >
        <Grid
          container
          item
          xs={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <img alt="logo" src={"images/logo.png"} width="50" />
          <Box ml={2}>
            <Typography component="h1">Umany</Typography>
          </Box>
        </Grid>
        <Grid container item xs={8} justify="flex-end">
          <span className={`${classes.instagram} ${classes.icon}`} />
          <span className={`${classes.facebook} ${classes.icon}`} />
          <span className={`${classes.twitter} ${classes.icon}`} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        className={`${classes.header} ${classes.mainHeader}`}
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
          className={`${classes.header} ${classes.spacing}`}
        >
          <Grid
            container
            item
            xs={8}
            md={6}
            justify="flex-start"
            direction="column"
            alignContent="flex-start"
            style={{ marginTop: "3em", paddingBottom: "2em" }}
          >
            <Typography
              align="left"
              style={{ color: "white", margin: 0 }}
              component="h1"
            >
              Umany Empresas
            </Typography>
            <Typography align="left" style={{ margin: 0 }} component="h1">
              Ahora tus ventas van a cambiar el mundo
            </Typography>
            <Hidden smDown>
              <Typography align="left" variant="p" style={{ color: "white" }}>
                Una breve descripción que le explique al usuario algo como “Hacé
                las ventas/canjes de tu marca desde la comodidad de la web”.
              </Typography>
            </Hidden>
          </Grid>
          <Grid container item xs={12} md={6} justify="center">
            <Paper style={{ width: 360 }}>{children}</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <Grid container item direction="column" xs={8} alignItems="center">
          <Typography component="h1" style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur
          </Typography>
          <Typography component="h3" style={{ color: "black", margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipisc- ing elitLorem ipsum
            dolor sit amet, elit
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        style={{ marginTop: "1em" }}
        className={`${classes.header} ${classes.peoples}`}
      >
        <Hidden smDown>
          <img alt="logo" src={"images/svg/somePeople.svg"} />
        </Hidden>
        <Hidden smUp>
          <img alt="logo" src={"images/svg/onePeople.svg"} />
        </Hidden>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
        style={{ marginTop: "0", padding: "20px" }}
        className={`${classes.spacing}`}
      >
        <Grid item xs={8} md={3}>
          <Typography align="center" component="h2">
            Registra tu empresa
          </Typography>
          <Typography align="center" component="p">
            Lorem ipsum dolor sit amet, con- sectetur adipiscing elitLorem ipsum
            dolor sit amet, elit
          </Typography>
        </Grid>
        <Grid item xs={8} md={3}>
          <Typography align="center" component="h2">
            Registra tu empresa
          </Typography>
          <Typography align="center" component="p">
            Lorem ipsum dolor sit amet, con- sectetur adipiscing elitLorem ipsum
            dolor sit amet, elit
          </Typography>
        </Grid>
        <Grid item xs={8} md={3}>
          <Typography align="center" component="h2">
            Registra tu empresa
          </Typography>
          <Typography align="center" component="p">
            Lorem ipsum dolor sit amet, con- sectetur adipiscing elitLorem ipsum
            dolor sit amet, elit
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={`${classes.spacing} ${classes.tutorialBox}`}>
        <Grid
          item
          xs={12}
          md={5}
          style={{ background: "#cccccc", minHeight: 300 }}
        >
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </Grid>
        <Grid item xs={12} md={7} style={{ padding: "0 30px" }}>
          <Typography align="left" component="h1" className={classes.tutorial}>
            Video Tutorial
          </Typography>
          <Typography align="left" component="p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography align="left" component="p">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.people2}
      >
        <img
          alt="logo"
          className={classes.people2Center}
          src={"images/svg/people2Center.svg"}
        />

        <Grid container direction="column" alignItems="center">
          <Grid container item direction="column" xs={4} alignItems="center">
            <Typography component="h1" style={{ margin: 0 }}>
              Invitar un comercio amigo
            </Typography>
            <Typography component="h3" style={{ color: "black", margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipisc- ing elitLorem
              ipsum dolor sit amet, elit
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        className={`${classes.header} ${classes.footerBg}`}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          className={classes.header}
        >
          <Grid container direction="column" item md={6} xs>
            <Grid
              container
              item
              direction="column"
              xs
              justify="flex-end"
              alignItems="center"
              className={`${classes.spacing}`}
            >
              <img
                alt="logo"
                style={{ zIndex: "9999" }}
                src={"images/svg/footer-logo.svg"}
                width="200"
              />
            </Grid>
            <Grid container item direction="row" style={{ marginTop: "4em" }}>
              <Grid container justify="center" sm={6} md={6} item>
                <List>
                  <ListItem>
                    <ListItemText>
                      <Typography align="left" component="h1">
                        Contacto
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link
                        href="whatsapp://send?abid=+5491167613443&text="
                        color="inherit"
                      >
                        +54 9 11 6761 3443
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Link href="mailto:contact@umany.global" color="inherit">
                        contact@umany.global
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid container justify="center" sm={6} md={6} item>
                <List>
                  <ListItem>
                    <ListItemText>
                      <Typography align="left" component="h1">
                        Sumante
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Grid container item xs justify="flex-start">
                        <span
                          className={`${classes.instagram} ${classes.icon}`}
                        />
                        <span
                          className={`${classes.facebook} ${classes.icon}`}
                        />
                        <span
                          className={`${classes.twitter} ${classes.icon}`}
                        />
                      </Grid>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid container item md={6} xs className={`${classes.spacing}`}>
              <img
                alt="header-3"
                src={"images/svg/footer-people.svg"}
                className={classes.imageBox}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(
  withTranslation()(
    withStyles(LoginStyle.layout, { withTheme: true })(LoginLayout)
  )
);
