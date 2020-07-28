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
import CardActions from '@material-ui/core/CardActions';
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
import Badge from '@material-ui/core/Badge';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import { findByLabelText } from '@testing-library/react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import { spellinfo, spell } from '../utils/data';
import Spell from './Spell';
import { AddSpell, DeleteLevel } from './SpellBtns';
import SpellSlots from './SpellSlots';
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
      style={{ width: "100%" }}
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

export default function SpellsLevel(props: {
  spells: spellinfo;
  setState: (newsp: spellinfo) => void;
  edit: boolean;
  level: number;
  tabVal: number;
}) {
  let s = props.spells;

  let spellList = [];
  for (let i = 0; i < s.spellsknown[props.level].length; i++) {
    spellList.push(
      <Spell
        spells={s}
        setState={props.setState}
        edit={props.edit}
        level={props.level}
        index={i}
      />
    );
  }

  if (props.edit) {
    return (
      <TabPanel value={props.tabVal} index={props.level}>
        {s.slots.length > 0 ? <SpellSlots spells={s} level={props.level} setState={props.setState} edit={props.edit} /> : null}
        {spellList}
        <DeleteLevel spells={s} level={props.level} setState={props.setState} />
      </TabPanel>
    );
  } else {
    return (
      <TabPanel value={props.tabVal} index={props.level}>
        {s.slots.length > 0 ? <SpellSlots spells={s} level={props.level} setState={props.setState} edit={props.edit} /> : null}
        {spellList}
        <AddSpell spells={s} level={props.level} setState={props.setState} />
      </TabPanel>
    );
  }
}