import * as React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TaskBoard from "./TaskBoard";
import ProxyPanel from "./ProxyPanel";
import Settings from "./Settings";
import Grid from "@material-ui/core/Grid";
import { CloseButton, MinButton } from "../Components/CustomIconButton";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#00ffff00",
  },
  tabpanel: {
    background: "#121212",
  },
  button: {
    float: "right",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabpanel}
        >
          <Tab label="TaskBoard" {...a11yProps(0)} />
          <Tab label="Proxy" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
          <div style={{ marginLeft: 600 }}>
            <CloseButton />
          </div>
          <MinButton />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TaskBoard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProxyPanel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Settings />
      </TabPanel>
    </div>
  );
}
