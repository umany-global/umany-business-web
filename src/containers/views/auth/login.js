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
import { IconButton } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

// STYLES
import LoginStyle from "@utilities/styles/views/login.style";
// LAYOUTS
import LoginLayout from "@containers/layouts/login.layout";

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
    API.defaults.headers.common["Authorization"] = await firebase
      .auth()
      .currentUser.getIdToken();

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
      <LoginLayout>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <MsgSnack open={this.state.valid.open} />
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item elevation={2}>
              <div className={classes.paper}>
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
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      style={{
                        flexDirection: "row",
                        flexWrap: "initial",
                      }}
                    >
                      <TextField
                        value={this.state.phone}
                        name="phone"
                        onChange={this.handleChange}
                        label="Telefono"
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
                    <TextField
                      value={this.state.password}
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                      label="Contraseña"
                    />
                  </Grid>
                </form>

                <Grid container direction="column" alignItems="flex-end">
                  <Typography color="primary" variant="body2">
                    Olvidaste tu contraseña
                  </Typography>
                  <Button
                    onClick={() => {
                      this.handleAuth(true);
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Ingresa
                  </Button>
                </Grid>
                <form className={classes.form} noValidate>
                  <Divider style={{ margin: "10px 0" }} />

                  <Button
                    variant="contained"
                    style={{ background: "red", color: "white" }}
                    className={classes.submit}
                    startIcon={<FontAwesomeIcon icon={["fab", "google"]} />}
                    onClick={() => {
                      this.handleAuthProvider("GoogleAuthProvider");
                    }}
                  >
                    Google
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    endIcon={<FontAwesomeIcon icon={["fab", "facebook-f"]} />}
                    onClick={() => {
                      this.handleAuthProvider("FacebookAuthProvider");
                    }}
                  >
                    Facebook
                  </Button>
                  <Divider style={{ margin: "10px 0" }} />
                </form>
                <Grid container direction="column" alignItems="center">
                  <Typography
                    style={{ fontWeigth: "bold" }}
                    variant="h6"
                    gutterBottom
                    color="primary"
                  >
                    Todavia no registraste tu negocio, emprendimiento?
                  </Typography>
                  <p style={{ margin: "10px 0 5px 0" }}>
                    Descarga la app y suma tu huella
                  </p>
                  <img src={"images/googlePlay.png"} alt="gplay" width="125" />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </LoginLayout>
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
    )(withStyles(LoginStyle.main, { withTheme: true })(LoginView))
  )
);
