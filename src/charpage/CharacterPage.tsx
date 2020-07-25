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
        edit={props.edit} />
    );
  }

  if (props.edit) {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw;", marginTop: "50px" }}>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Class" defaultValue={c.class} /></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Race" defaultValue={c.race} /></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Max HP" type="number" defaultValue={c.maxhp} /></CardContent></Card></Grid>
        <Grid item xs={3}><Card><CardContent ><TextField inputProps={{ style: { textAlign: 'center' } }} label="Alignment" defaultValue={c.align} /></CardContent></Card></Grid>
        {HealthBar(props)}
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="AC" type="number" defaultValue={c.ac} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Prof." type="number" defaultValue={c.prof} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Init." type="number" defaultValue={c.init} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Speed" type="number" defaultValue={c.speed} />
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
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="AC" type="number" value={c.ac} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Proficiency Bonus" type="number" value={c.prof} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Initiative" type="number" value={c.init} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent className="row-card">
              <TextField inputProps={{ style: { textAlign: 'center' } }} label="Speed" type="number" value={c.speed} />
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