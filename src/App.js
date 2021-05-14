import React from "react";
import "./App.css";
import "fontsource-roboto";
import "react-confirm-alert/src/react-confirm-alert.css";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { connect } from "react-redux";

// ACTIONS
import { HANDLE_MESSAGE } from "@utilities/redux/actions/constants";

// ACTIONS CREATORS
// import { getBrand } from "@utilities/redux/actions/brand.creators";

// ROUTERS
import PublicComponent from "@/router/public";
import PrivateComponent from "@/router/private";

library.add(fab);

const App = (props) => {
  const { auth, message, handleClose } = props;
  console.log('message', message)
  const { loggedIn } = auth;
  const { text, open = true, time = 6000, type = "success" } = message;
  return (
    <div className="App">
      <Snackbar
        open={open}
        autoHideDuration={time}
        onClose={() => {
          handleClose({ ...message, open: false });
        }}
      >
        <Alert
          severity={type}
          onClose={() => {
            handleClose({ ...message, open: false });
          }}
        >
          {text}
        </Alert>
      </Snackbar>
      {loggedIn ? <PrivateComponent /> : <PublicComponent />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, message: state.message, brands: state.brands };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: (payload) => {
      dispatch({
        type: HANDLE_MESSAGE,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
