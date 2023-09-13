import React, { lazy, Suspense } from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tabs.css";

const SurveilenceContainer = lazy(() => import('./SurveilenceCards'));
const DetectionCards = lazy(() => import('./DetectionCards'));
const AsistenceCards = lazy(() => import('./AsistenceCard'));
const AutomationCard = lazy(() => import('./AutomationCard'));
const ParkingCard = lazy(() => import('./ParkingCard'));
const NetworkCards = lazy(() => import('./NetworkCard'));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%", margin: "0 auto" }}
      {...other}
    >
       <Suspense fallback={<div>Loading...</div>}>
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
      </Suspense>
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const TabsComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const switchToPreviousTab = () => {
    if (value > 0) {
      setValue((value) => value - 1);
    }
  };

  const switchToNextTab = () => {
    if (value < 5) {
      setValue((value) => value + 1);
    }
  };

  return (
    <div className="tabs-container">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={"120px"}
        paddingBottom={"20px"}
      >
        <IconButton
          className="icon-button"
          onClick={() => switchToPreviousTab()}
        >
          <i
            class="fa-sharp fa-solid fa-arrow-left fa-xl"
            style={{ color: "#cf0101" }}
          />
        </IconButton>
        <IconButton className="icon-button" onClick={() => switchToNextTab()}>
          <i
            class="fa-sharp fa-solid fa-arrow-right fa-xl"
            style={{ color: "#cf0101" }}
          />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ borderBottom: 1, borderColor: "divider" }}
        maxWidth={"90%"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          TabIndicatorProps={{
            style: { background: "#cf0101", color: "#cf0101" },
          }}
          style={{ color: "#cf0101" }}
          sx={{
            ".Mui-selected": {
              color: `red !important`,
            },
          }}
        >
          <Tab label="Sisteme de supraveghere video" {...a11yProps(0)} />
          <Tab label="Detectie si avertizare incendiu" {...a11yProps(1)} />
          <Tab label="Apelare asistenta" {...a11yProps(2)} />
          <Tab label="Automatizari usi si porti" {...a11yProps(3)} />
          <Tab label="Sisteme de acces" {...a11yProps(4)} />
          <Tab label="Retele Voce-Date" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel className="tabs" value={value} index={0}>
        <SurveilenceContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DetectionCards />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AsistenceCards />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AutomationCard />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ParkingCard />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <NetworkCards />
      </TabPanel>
    </div>
  );
};

export default TabsComponent;
