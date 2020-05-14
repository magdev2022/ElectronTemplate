import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ff7171",
    textAlign: "center",
    fontSize: 12,
  },
}));

export const TitleBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <label>PRODUCT</label>
        </Grid>
        <Grid item xs={1}>
          <label>SIZE</label>
        </Grid>
        <Grid item xs={1}>
          <label>PROFILE</label>
        </Grid>
        <Grid item xs={1}>
          <label>PAYMENT</label>
        </Grid>
        <Grid item xs={2}>
          <label>PROXY</label>
        </Grid>
        <Grid item xs={2}>
          <label>STATUS</label>
        </Grid>
        <Grid item xs={2}>
          <label>ACTION</label>
        </Grid>
      </Grid>
    </div>
  );
};
