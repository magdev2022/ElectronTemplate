import * as React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Profile from '../Types/Profile'
const { ipcRenderer } = require("electron");
const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 600,
    },
    textField: {
      width: 250,
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
    dense: {
      marginTop: 15,
    },
    menu: {
      width: 200,
    },
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
  });

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: "#ff7171",
    backgroundColor: "#ff717100",
    width: 200,
    height: 40,
    borderRadius: "5px",
    marginLeft: 10,
    marginTop: 30,
    border: "solid 1px #ff7171",
    "&:hover": {
      backgroundColor: "#ff717112",
    },
  },
}))(Button);

const exp_month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const exp_year = [2020, 2021, 2022, 2023];

export interface Props extends WithStyles<typeof styles> {}

class Setting extends React.Component<Props, Profile> {
  state: Profile = {
    email: "",
    password: "",
    cardnumber: "",
    security_code: "",
    exp_month: "",
    exp_year: "",
  };

  handleChange = (name: keyof Profile) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ [name]: event.target.value } as Pick<Profile, keyof Profile>);
  };

  render() {
    const { classes } = this.props;
    const handleCreateProfile=()=>{
      console.log(this.state);
      let senddata ={
        model:"profile",
        data:this.state
      }
      ipcRenderer.send('data',senddata);
    }

    return (
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                value={this.state.email}
                onChange={this.handleChange("email")}
                margin="normal"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                value={this.state.password}
                onChange={this.handleChange("password")}
                margin="normal"
              />
              <TextField
                id="cardnumber"
                label="Card Number"
                className={classes.textField}
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                margin="normal"
              />
              <TextField
                id="security_number"
                label="Security Code"
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                onChange={this.handleChange("security_code")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="expire_month"
                select
                label="Expire Month"
                className={classes.textField}
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                value={this.state.exp_month}
                onChange={this.handleChange("exp_month")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {exp_month.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </TextField>

              <TextField
                id="expire_year"
                select
                label="Expire Year"
                className={classes.textField}
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                value={this.state.exp_year}
                onChange={this.handleChange("exp_year")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {exp_year.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </TextField>
              <TextField
                id="profile_name"
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.input }}
                className={classes.textField}
                label="Profile Name"
                margin="normal"
              />
              <div>
                <ColorButton variant="outlined" onClick={handleCreateProfile}>Create Profile</ColorButton>
                <ColorButton variant="outlined">Delete Profile</ColorButton>
              </div>
            </form>
          </Grid>
          <Grid item xs={6}>
            <TextField
              multiline
              rows={8}
              id="webhook"
              InputProps={{ className: classes.input }}
              InputLabelProps={{ className: classes.input }}
              className={classes.webhook_field}
              label="WebHook"
              margin="normal"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ColorButton variant="outlined">Test WebHook</ColorButton>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Setting);
