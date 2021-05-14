// LIBS
import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

// LIB COMPONENTS
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

// STYLES
import LoginStyle from "@utilities/styles/views/login.style";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ACTIONS
import { AUTH_LOGOUT, HANDLE_AUTH } from "@utilities/redux/actions/constants";

// IMAGES
import logo from "@utilities/images/logo-umany.png";

// API
import API from "@api";
import axios from "axios";
import { handleErrors } from "@utilities/custom";

// ACTIONS CREATORS
import {
  loginWithPhone,
  loginWithProvider,
} from "@utilities/redux/actions/auth.creators";

// COMPONENTS
import InputUmany from "@components/commons/inputs/inputBase.component";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: false,
      phone: "",
      password: "",
      valid: { msg: "", open: false },
    };
    this.handleViewPosition = this.handleViewPosition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.loginWithToken = this.loginWithToken.bind(this);
    this.handleCloseMsg = this.handleCloseMsg.bind(this);
    this.handleFirebase();
  }

  handleViewPosition(label) {
    this.setState({ position: label });
  }

  async handleFirebase() {
    await firebase.messaging().requestPermission();
    const fcmToken = await firebase.messaging().getToken();
    console.log("fcmToken", fcmToken);
    this.props.auth_token({
      fcmToken,
    });
  }

  async handleCloseMsg() {
    this.setState({ valid: { open: false } });
  }

  async loginWithToken(data) {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await firebase
          .auth()
          .signInWithCustomToken(data.id_token);
        return resolve(response);
      } catch (error) {
        console.log("error :>> ", error);
        return reject(error);
      }
    });
  }

  async signInWithUmany(phone, password, fcmToken) {
    var data = JSON.stringify({
      phone,
      password,
    });
    return new Promise(async (resolve, reject) => {
      try {
        var config = {
          method: "post",
          url: "/login",
          data: data,
        };

        let responseLogin = await API(config);
        return resolve(responseLogin);
      } catch (error) {
        console.log("error :>> ", error);
        return reject(error);
      }
    });
  }

  async validClientToken(phone_token, authToken, fcmToken, phone) {
    return new Promise(async (resolve, reject) => {
      try {
        let config = {
          method: "post",
          url: "/clients",
          headers: {
            "Content-Type": "application/json",
            "Umany-ai": fcmToken,
            "Umany-sc": phone_token,
            Authorization: authToken,
          },
          data: {
            device: {
              vendor_id: "123",
              type: "mobile",
              brand: "",
              model: "",
              os: {
                name: "",
                version: "",
              },
              phone_number: phone,
              mac_address: "D4:3B:04:5A:A2:C6",
              imei: "",
            },
            app: {
              platform: "",
              version: "",
              build: "",
            },
          },
        };

        let responseClient = await API(config);
        return resolve(responseClient);
      } catch (error) {
        this.props.auth_token({ authToken: "" });
        return reject(error);
      }
    });
  }

  async getMe(fcmToken) {
    API.defaults.headers.common[
      "Authorization"
    ] = await firebase.auth().currentUser.getIdToken();

    var config = {
      method: "get",
      url: "https://meleeisland.umany.global/me",
      headers: {
        get: {
          "Content-Type": "application/json",
          "Umany-ai": fcmToken,
          Authorization: await firebase.auth().currentUser.getIdToken(),
        },
      },
    };
    return new Promise(async (resolve, reject) => {
      try {
        let responseMe = await axios(config);
        return resolve(responseMe);
      } catch (error) {
        console.log("error :>> ", error);
        return reject(error);
      }
    });
  }

  async handleAuth() {
    const { phone, password } = Object.assign({}, this.state);
    try {
      const { fcmToken } = this.props;
      await this.props.logout({ authToken: "" });
      await this.props.handlePhoneLogin({ phone, password, fcmToken });
    } catch (error) {
      // console.log("error :>> ", error, error.response);
    }
  }
  async handleAuthProvider(provider) {
    try {
      const { fcmToken } = this.props;
      await this.props.logout({ authToken: "" });
      await this.props.handleProviderLogin({ fcmToken, provider });
    } catch (error) {
      // console.log("error :>> ", error, error.response);
    }
  }
  handleChange(event) {
    let data = {};
    data[event.target.name] = event.target.value;
    console.log("data :>> ", data);
    this.setState(data);
  }
  render() {
    const MsgSnack = () => {
      return (
        <Snackbar
          open={this.state.valid.open}
          autoHideDuration={6000}
          onClose={() => {
            this.handleCloseMsg();
          }}
          message={this.state.valid.msg}
        />
      );
    };

    const { classes, t } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <MsgSnack open={this.state.valid.open} />
        {this.state.position ? (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={4} elevation={2}>
              <div className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{
                    flexDirection: "row",
                    flexWrap: "initial",
                  }}
                >
                  <img src={logo} alt="" style={{ width: 70 }} />
                  <Typography component="h2" align="left" variant="body1">
                    Ingresa con tu telefono y contraseña
                    {/* {t("login.sign_in")} */}
                  </Typography>
                </Grid>

                <form className={classes.form} noValidate>
                  <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                    style={{
                      flexDirection: "column",
                      flexWrap: "initial",
                    }}
                  >
                    <InputLabel>Teléfono: +54 (11) 0000-0000</InputLabel>
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      style={{
                        flexDirection: "row",
                        flexWrap: "initial",
                      }}
                    >
                      <InputUmany
                        placeholder="+54"
                        disabled
                        style={{ width: 90 }}
                      />
                      <InputUmany
                        value={this.state.phone}
                        name="phone"
                        onChange={this.handleChange}
                        style={{ width: "100%" }}
                        placeholder="(11) 1234-5678"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                    style={{
                      marginTop: 10,
                      flexDirection: "column",
                      flexWrap: "initial",
                    }}
                  >
                    <InputLabel>Contraseña</InputLabel>
                    <InputUmany
                      value={this.state.password}
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                      style={{ width: "100%" }}
                      placeholder="Contraseña"
                    />
                  </Grid>
                </form>

                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Button
                    onClick={() => {
                      this.handleAuth(true);
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    Entrár
                  </Button>
                  <Button
                    onClick={() => {
                      this.handleViewPosition();
                    }}
                    variant="contained"
                  >
                    Volver
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={4} elevation={2}>
              <div className={classes.paper}>
                <img src={logo} alt="" style={{ width: 100 }} />
                <Typography component="h1" variant="h5">
                  Bienvenido a Umany
                  {/* {t("login.sign_in")} */}
                </Typography>
                <form className={classes.form} noValidate>
                  <Button
                    fullWidth
                    variant="contained"
                    // color="white"
                    onClick={() => {
                      this.handleAuthProvider("GoogleAuthProvider");
                    }}
                    className={classes.submit}
                    startIcon={<FontAwesomeIcon icon={["fab", "google"]} />}
                  >
                    Entrá con Google
                  </Button>

                  <Button
                    fullWidth
                    variant="contained"
                    // color="white"
                    onClick={() => {
                      this.handleAuthProvider("FacebookAuthProvider");
                    }}
                    className={classes.submit}
                    startIcon={<FontAwesomeIcon icon={["fab", "facebook-f"]} />}
                  >
                    Entrá con Facebook
                  </Button>
                </form>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Button
                    onClick={() => {
                      this.handleViewPosition("byphone");
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    Entrár
                  </Button>
                  <Button variant="contained" color="secondary">
                    Crea Cuenta
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return state.auth;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleProviderLogin: (data) => {
      dispatch(loginWithProvider(data));
    },
    handlePhoneLogin: (data) => {
      dispatch(loginWithPhone(data));
    },
    logout: () => {
      dispatch({
        type: AUTH_LOGOUT,
      });
    },

    auth_token: (tokens) => {
      dispatch({
        type: HANDLE_AUTH,
        payload: {
          ...tokens,
        },
      });
    },
  };
};

export default compose(
  withTranslation()(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(withStyles(LoginStyle, { withTheme: true })(LoginView))
  )
);
