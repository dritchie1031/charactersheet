import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { spellinfo, spell, char } from '../utils/data';
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