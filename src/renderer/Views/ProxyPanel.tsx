import * as React from "react";
import TextField from '@material-ui/core/TextField'
import {
  WithStyles, makeStyles
} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  ({
    webhook_field: {
      width: 450,
      "& label.Mui-focused": {
        color: "#ff7171",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#ff7171",
      },
      fontSize: 13,
      marginLeft: 20,
    },
    input: {
      color: "#ff7171",
    },
  }));
export default function ProxyPanel() {
  const classes = useStyles();
  return <div>
    <TextField
              multiline
              rows={10}
              id="webhook"
              InputProps={{ className: classes.input }}
              InputLabelProps={{ className: classes.input }}
              className={classes.webhook_field}
              label="Add Proxy"
              margin="normal"
            />
  </div>;
}
