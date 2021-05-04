// LIBS
import React from "react";
import { connect } from "react-redux";

// COMPONENTS
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// STYLES
import RoundedStyle from "@utilities/styles/components/roundedBox.style";

const RoundedComponent = ({ title, subtitle }) => {
  const classes = RoundedStyle();
  return (
    <Paper
      className={`${classes.paperContainer} ${classes.color1}`}
      elevation={3}
    >
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        style={{ height: "100%" }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => state.dashboard;
export default connect(mapStateToProps)(RoundedComponent);
