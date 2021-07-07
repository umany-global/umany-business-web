// LIBS
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// ACTIONS CREATORS
import { getBrandTransaction } from "@utilities/redux/actions/brand.creators";

// COMPONENTS
import { Components } from "umanyuikit";
// import UmanyList from "@components/list.component";

// CLIENTS
import BrandClient from "@api/clients/brands";

// CONSTANTS
import { HANDLE_MESSAGE } from "@/utilities/redux/actions/constants";

// eslint-disable-next-line import/no-anonymous-default-export
const DiscountBox = ({ brand, handleTransaction, handleMessage }) => {
  const history = useHistory();
  const classes = useStyles();
  let { transactionId } = useParams();
  React.useEffect(() => {
    if (transactionId) {
      handleTransaction(transactionId);
    } else {
      history.push("/");
    }
  }, []);

  const handleCancel = () => {
    history.push("/");
  };
  const transaction = Object.assign(brand.transaction, {});
  const { PromoBox } = Components;
  return (
    <Grid container className={classes.root}>
      <Grid container justify="center">
        <Grid item md={4}>
          {transaction.id && brand.current.id ? (
            <PromoBox
              item={transaction}
              brand={brand.current.brand}
              confirmation={(item) => {
                if (!item) {
                  handleCancel();
                } else {
                  BrandClient.newRedeem({
                    brandId: brand.current.brand.id,
                    transactionId: transaction.id,
                  })
                    .then((response) => {
                      handleMessage(
                        `El descuento se ha aplicado correctamente`
                      );
                      history.push("/");
                    })
                    .catch(() => {
                      history.push("/");
                    });
                }
              }}
            />
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  labelW: {
    width: 100,
    display: "block",
    textAlign: "right",
  },
  container: {
    flexGrow: 1,
    maxHeight: 440,
  },
  circleContent: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    padding: theme.spacing(4),
  },
  tabContent: {
    flexGrow: 1,
    // [theme.breakpoints.down("sm")]: {
    //   width: `calc(100% - ${240}px)`,
    // },
    padding: theme.spacing(4),
  },
}));

const mapStateToProps = (state) => {
  return { brand: state.brands };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleTransaction: (transactionId) => {
      dispatch(getBrandTransaction(transactionId));
    },
    handleMessage: (text) => {
      dispatch({
        type: HANDLE_MESSAGE,
        payload: {
          text,
          open: true,
          type: "success",
        },
      });
    },
  };
};

DiscountBox.propTypes = {
  brand: PropTypes.object,
  handleTransaction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountBox);
