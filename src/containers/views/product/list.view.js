// LIBS
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// ACTIONS CREATORS
import { getTransactionList } from "@utilities/redux/actions/brand.creators";

// COMPONENTS
import { Components } from "argonflavor";
// import UmanyList from "@components/list.component";

// Constant

// eslint-disable-next-line import/no-anonymous-default-export
const BrandListView = (props) => {
  const { brand, initBrandList } = props;
  const history = useHistory();
  const classes = useStyles();
  React.useEffect(() => {
    if (brand.current.id) {
      console.log('brand.current', brand.current)
      initBrandList(brand.current.brand.id);
    }
  }, [brand.current.id]);

  const { UmanyList } = Components;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.tabContent}>
        <UmanyList
          items={brand.list}
          // onInput={(item) => {
          //   console.log('item', item)
          //   history.push(`/${item.id}`);
          // }}
        />
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
    initBrandList: (brandId) => {
      dispatch(getTransactionList(brandId));
    },
  };
};

BrandListView.propTypes = {
  brand: PropTypes.object,
  selectCurrentDiscount: PropTypes.func,
  initBrandList: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandListView);
