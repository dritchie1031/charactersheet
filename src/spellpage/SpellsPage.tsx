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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { spellinfo, spell, char } from '../utils/data';
import { findByLabelText } from '@testing-library/react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SpellLevel from './SpellLevel';
import SpellPoints from './SpellPoints';
import { AddLevel } from './SpellBtns';
import '../style.css';

function getSpellAbility(ability: number) {
  switch (ability) {
    case 0:
      return "Strength";
    case 1:
      return "Dexterity";
    case 2:
      return "Constitution";
    case 3:
      return "Intelligence";
    case 4:
      return "Wisdom";
    case 5:
      return "Charisma";
    default:
      return "Incorrect Stat ID"
  }
}

export default function SpellsPage(props: {
  spells: spellinfo;
  character: char;
  setState: (newsp: spellinfo) => void;
  edit: boolean;
}) {
  let s = props.spells;

  const [curTab, setTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  function handleSpellAbility(event: React.ChangeEvent<HTMLInputElement>) {
    let newSpells: spellinfo = {
      ...s,
      spellability: parseInt(event.target.value)
    }
    props.setState(newSpells);
  }

  function handleDC(event: React.ChangeEvent<HTMLInputElement>) {
    let newSpells: spellinfo = {
      ...s,
      savedc: parseInt(event.target.value)
    }
    props.setState(newSpells);
  }

  function handleAtk(event: React.ChangeEvent<HTMLInputElement>) {
    let newSpells: spellinfo = {
      ...s,
      atkbonus: parseInt(event.target.value)
    }
    props.setState(newSpells);
  }

  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  let tabs = [];
  for (let i = 0; i < s.spellsknown.length; i++) {
    tabs.push(<Tab label={"Level " + i} {...a11yProps(i)} />);
  }

  let leveltabs = [];
  for (let i = 0; i < s.spellsknown.length; i++) {
    leveltabs.push(<SpellLevel spells={s}
      setState={props.setState}
      edit={props.edit}
      level={i}
      tabVal={curTab}
    />);
  }
  /* <MenuItem value={s.spellability}>{getSpellAbility(s.spellability)}</MenuItem> */
  if (props.edit) {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw", marginTop: "50px" }}>
        <Grid item xs={4}>
          <Card className="row-card">
            <CardContent>
              <FormControl>
                <InputLabel id="class-form">Spell Ability</InputLabel>
                <Select
                  value={s.spellability}
                  inputProps={{
                    name: 'spellability',
                    id: 'spell-ability',
                  }}
                  style={{ minWidth: "100px" }}
                  onChange={handleSpellAbility}>

                  <MenuItem value={0}>Strength</MenuItem>
                  <MenuItem value={1}>Dexterity</MenuItem>
                  <MenuItem value={2}>Constitution</MenuItem>
                  <MenuItem value={3}>Intelligence</MenuItem>
                  <MenuItem value={4}>Wisdom</MenuItem>
                  <MenuItem value={5}>Charisma</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="row-card">
            <CardContent>
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="DC" defaultValue={s.savedc}
                onChange={handleDC} type="number" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="row-card">
            <CardContent>
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Attack Bonus" defaultValue={s.atkbonus}
                onChange={handleAtk} type="number" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography style={{ textAlign: 'center', width: '100%' }} variant="h5">Spells Known and Prepared</Typography>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={curTab}
                  onChange={handleChange}
                >
                  {tabs}
                </Tabs>
                {leveltabs}
              </div>
            </CardContent>
          </Card>
        </Grid>
        {s.points.max > -1 ? <SpellPoints spells={s} setState={props.setState} edit={props.edit} /> : null}
        <Grid item xs={3}>
          <Card className="row-card">
            <CardContent>
              <AddLevel spells={s} setState={props.setState} />
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    );
  } else {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw", marginTop: "50px" }}>
        <Grid item xs={4}>
          <Card className="row-card">
            <CardContent>
              <Typography>Spell Ability: {getSpellAbility(s.spellability)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="row-card">
            <CardContent>
              <Typography>Spell Save DC: {s.savedc}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="row-card">
            <CardContent>
              <Typography>Attack Bonus: +{s.atkbonus}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography style={{ textAlign: 'center', width: '100%' }} variant="h5">Spells Known and Prepared</Typography>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={curTab}
                  onChange={handleChange}
                >
                  {tabs}
                </Tabs>
                {leveltabs}
              </div>
            </CardContent>
          </Card>
        </Grid>
        {s.points.max > -1 ? <SpellPoints spells={s} setState={props.setState} edit={props.edit} /> : null}
      </Grid>
    );
  }
}