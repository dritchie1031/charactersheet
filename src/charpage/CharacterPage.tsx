import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import ProfBlock from './ProfBlock';
import FeatureBlock from './FeatureBlock';
import SkillTable from './SkillTable';
import StatTable from './StatTable';
import HealthBar from './HealthBar';
import Points from './Points';
import { char } from '../utils/data';
import '../style.css';

export default function CharacterPage(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
}) {
  let c = props.character;

  let otherPoints = [];
  for (let i = 0; i < c.otherpts.length; i++) {
    otherPoints.push(
      <Points
        pts={c.otherpts[i]}
        edit={props.edit}
        character={props.character}
        setState={props.setState}
        index={i} />
    );
  }

  function onClassChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      class: event.target.value
    }
    props.setState(newChar);
  }

  function onRaceChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      race: event.target.value
    }
    props.setState(newChar);
  }

  function onLevelChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      level: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  function onAlignChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      align: event.target.value
    }
    props.setState(newChar);
  }

  function onACChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      ac: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  function onPBChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      prof: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  function onInitChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      init: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  function onSpeedChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      speed: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  if (props.edit) {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw", marginTop: "50px" }}>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Class" defaultValue={c.class}
          onChange={onClassChange} /></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Race" defaultValue={c.race}
          onChange={onRaceChange} /></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Level" type="number" defaultValue={c.level}
          onChange={onLevelChange} /></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Alignment" defaultValue={c.align}
          onChange={onAlignChange} /></CardContent></Card></Grid>
        {HealthBar(props)}
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="AC" type="number" defaultValue={c.ac} onChange={onACChange} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Prof." type="number" defaultValue={c.prof} onChange={onPBChange} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Init." type="number" defaultValue={c.init} onChange={onInitChange} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Speed" type="number" defaultValue={c.speed} onChange={onSpeedChange} />
            </CardContent>
          </Card>
        </Grid>
        <StatTable character={props.character} setState={props.setState} edit={props.edit} />
        <SkillTable character={props.character} setState={props.setState} edit={props.edit} />
        {otherPoints}
        <FeatureBlock character={props.character} setState={props.setState} edit={props.edit} />
        <ProfBlock character={props.character} setState={props.setState} edit={props.edit} />
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw", marginTop: "50px" }}>
        <Grid item xs={3}><Card><CardContent className="row-card"><Typography variant="h6">{c.class}</Typography></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent className="row-card"><Typography variant="h6">{c.race}</Typography></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent className="row-card"><Typography variant="h6">Level {c.level}</Typography></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent className="row-card"><Typography variant="h6">{c.align}</Typography></CardContent></Card></Grid>
        {HealthBar(props)}
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <Typography variant="h6">AC: {c.ac}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <Typography variant="h6">Prof. Bonus: +{c.prof}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <Typography variant="h6">Initiative: {c.init}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <Typography variant="h6">Speed: {c.speed} ft.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <StatTable character={props.character} setState={props.setState} edit={props.edit} />
        <SkillTable character={props.character} setState={props.setState} edit={props.edit} />
        {otherPoints}
        <FeatureBlock character={props.character} setState={props.setState} edit={props.edit} />
        <ProfBlock character={props.character} setState={props.setState} edit={props.edit} />
      </Grid>
    );
  }
}