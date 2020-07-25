import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import OpacityIcon from '@material-ui/icons/Opacity';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import { spellinfo, spell } from '../utils/data';
import { findByLabelText } from '@testing-library/react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../style.css';

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function SpellsPage(props: {
  spells: spellinfo;
  setState: (newsp: spellinfo) => void;
  edit: boolean;
}) {
  let s = props.spells;

  const [curTab, setTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }



  if (props.edit) {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={curTab}
          onChange={handleChange}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={curTab} index={0}>
          Item One
      </TabPanel>
        <TabPanel value={curTab} index={1}>
          Item Two
      </TabPanel>
        <TabPanel value={curTab} index={2}>
          Item Three
      </TabPanel>
        <TabPanel value={curTab} index={3}>
          Item Four
      </TabPanel>
        <TabPanel value={curTab} index={4}>
          Item Five
      </TabPanel>
        <TabPanel value={curTab} index={5}>
          Item Six
      </TabPanel>
        <TabPanel value={curTab} index={6}>
          Item Seven
      </TabPanel>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={curTab}
          onChange={handleChange}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={curTab} index={0}>
          Item One
      </TabPanel>
        <TabPanel value={curTab} index={1}>
          Item Two
      </TabPanel>
        <TabPanel value={curTab} index={2}>
          Item Three
      </TabPanel>
        <TabPanel value={curTab} index={3}>
          Item Four
      </TabPanel>
        <TabPanel value={curTab} index={4}>
          Item Five
      </TabPanel>
        <TabPanel value={curTab} index={5}>
          Item Six
      </TabPanel>
        <TabPanel value={curTab} index={6}>
          Item Seven
      </TabPanel>
      </div>
    );
  }
}