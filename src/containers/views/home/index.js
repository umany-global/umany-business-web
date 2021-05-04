// LIBS
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";

// ACTIONS CREATORS
import {
  filterBrand,
  filterReports,
  filterCategory,
  filterProject,
} from "@utilities/redux/actions/dashboard.creators";

// COMPONENTS
import { Components } from "umanyuikit";
// import UmanyList from "@components/list.component";

// Constant

// eslint-disable-next-line import/no-anonymous-default-export
const HomeView = (props) => {
  const {} = props;
  const classes = useStyles();
  const [list, setList] = React.useState([
    { amount: 10, product: "Chupeta", discount: "10%" },
    { amount: 7, product: "Canela", discount: "14%" },
    { amount: 600, product: "Maya", discount: "15%" },
  ]);
  const [target, setTarget] = React.useState({
    amount: 600,
    product: "Maya",
    discount: "15%",
  });

  const { UmanyList, PromoBox } = Components;
  console.log("UmanyList", UmanyList);
  console.log("PromoBox", PromoBox);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.tabContent}>
        <UmanyList items={list} />
      </Grid>
      {/* <Grid container justify="center">
        <Grid item md={4}>
          <PromoBox
            item={target}
            confirmation={(item) => {
              console.log(item);
            }}
          />
        </Grid>
      </Grid> */}
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

const mapStateToProps = (state) => state.dashboard;
const mapDispatchToProps = (dispatch) => {
  return {
    handleBrand: (params) => {
      dispatch(filterBrand(params));
    },
    handleReport: (params) => {
      dispatch(filterReports(params));
    },
    handleCategory: (params) => {
      dispatch(filterCategory(params));
    },
    handleProject: (params) => {
      dispatch(filterProject(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
