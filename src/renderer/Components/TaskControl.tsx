import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { MenuItem } from "@material-ui/core";
import {
  StartActionButton,
  StopActionButton,
} from "../Components/CustomIconButton";
const useStyles = makeStyles((theme) => ({
  textField: {
    "& label.Mui-focused": {
      color: "#ff7171",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff7171",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#999999",
    },
  },
  input: {
    color: "#ff7171",
    fontSize:11,
    textAlign:"center"
  },
  select: {
    "&:before": {
      borderColor: "#ff7171",
    },
    "&:after": {
      borderColor: "#ff7171",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#999999",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff7171",
    },
  },
  label:{
    color:"#00dd00",
    textAlign:"center"
  }
}));

export default function TaskControl() {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="product_url"
            className={classes.textField}
            InputLabelProps={{ className: classes.input }}
            InputProps={{ className: classes.input }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="size_select"
            fullWidth
            select
            className={classes.select}
            SelectProps={{ className: classes.input }}     
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="profile_select"
            fullWidth
            select
            className={classes.select}
            SelectProps={{ className: classes.input }}                     
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="payment_select"
            fullWidth
            select
            className={classes.select}
            InputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.input }}
          >
            <MenuItem>Credit</MenuItem>
            <MenuItem>代金引換</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="proxy_select"
            fullWidth
            select
            className={classes.select}
            InputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.input }}
          />
        </Grid>
        <Grid item xs={2} style={{textAlign:"center"}}>
          <label id="status_label" className={classes.label} >IDLE</label>
        </Grid>
        <Grid item xs={2} style={{textAlign:'center'}}>
          <StartActionButton />
          <StopActionButton />
        </Grid>
      </Grid>
    </form>
  );
}
