import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { IconButton } from "@material-ui/core";
import { Close, Maximize, Remove, PlayArrow, Stop } from "@material-ui/icons";
const { ipcRenderer } = require("electron");
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    favstyle: {
      backgroundColor: "#12121200",
      color: "white",
    },
    playstyle: {
      backgroundColor: "#12121200",
      color: "#00dd00",
    },
    startactionbtn: {
      color: "#00dd00",
    },
    stopactionbtn: {
      color: "#dd0000",
    },
  })
);

export const CloseButton = () => {
  const classes = useStyles();
  const handleClose = () => {
    ipcRenderer.send("close-me");
  };
  return (
    <div className={classes.root}>
      <Fab size="small" className={classes.favstyle} onClick={handleClose}>
        <Close />
      </Fab>
    </div>
  );
};
export const MinButton = () => {
  const classes = useStyles();
  const handleMin = () => {
    ipcRenderer.send("mini-me");
  };
  return (
    <div className={classes.root}>
      <Fab size="small" className={classes.favstyle} onClick={handleMin}>
        <Remove />
      </Fab>
    </div>
  );
};
export const StartActionButton = () => {
  const classes = useStyles();
  const handleStartAction = () => {
    console.log("start");
  };
  return (
      <IconButton
        className={classes.startactionbtn}
        onClick={handleStartAction}
      >
        <PlayArrow />
      </IconButton>
  );
};
export const StopActionButton = () => {
  const classes = useStyles();
  const handleStopAction = () => {
    console.log("stop");
  };
  return (
      <IconButton className={classes.stopactionbtn} onClick={handleStopAction}>
        <Stop />
      </IconButton>
  );
};
