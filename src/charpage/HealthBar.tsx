import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import CircularProgressWithLabel from './CircularProgressWithLabel';
import ModExp from './ModExp';
import ModHealth from './ModHealth';
import { char } from '../utils/data';
import '../style.css';

export default function HealthBar(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
}) {
  let c = props.character;


  function maxHPOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      maxhp: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  function currHPOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      currhp: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  function tempHPOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newChar: char = {
      ...props.character,
      temphp: parseInt(event.target.value)
    }
    props.setState(newChar);
  }

  let bar2Edit = [];
  let bar2NoEdit = [];
  if (c.exp > -1) {
    bar2NoEdit.push(
      <Grid item xs={8}>
        <Card>
          <CardContent
            className="row-card">
            <Typography variant="h6">Max HP: {c.maxhp}</Typography>
            <Typography variant="h6">Current HP: {c.currhp}</Typography>
            <Typography variant="h6">Temp HP: {c.temphp}</Typography>
            <CircularProgressWithLabel variant="static" value={100 * (c.currhp / c.maxhp)} />
            <ModHealth character={props.character} setState={props.setState} />
          </CardContent>
        </Card>
      </Grid>);
    bar2NoEdit.push(
      <Grid item xs={4}>
        <Card>
          <CardContent
            className="row-card">
            <Typography variant="h6">Exp: {c.exp}</Typography>
            <ModExp character={props.character} setState={props.setState} />
          </CardContent>
        </Card>
      </Grid>);
    bar2Edit.push(
      <Grid item xs={8}>
        <Card>
          <CardContent
            className="row-card">
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              label="Max HP" type="number"
              defaultValue={c.maxhp}
              onChange={maxHPOnChange} />
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              label="Current HP" type="number"
              defaultValue={c.currhp}
              onChange={currHPOnChange} />
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              label="Temp HP" type="number"
              defaultValue={c.temphp}
              onChange={tempHPOnChange} />
            <CircularProgressWithLabel variant="static" value={100 * (c.currhp / c.maxhp)} />
          </CardContent>
        </Card>
      </Grid>
    );
    bar2Edit.push(
      <Grid item xs={4}>
        <Card>
          <CardContent
            className="row-card">
            <TextField inputProps={{ style: { textAlign: 'center' } }} label="Exp" type="number" defaultValue={c.exp} />
          </CardContent>
        </Card>
      </Grid>);
  } else {
    bar2NoEdit.push(
      <Grid item xs={12}>
        <Card>
          <CardContent
            className="row-card">
            <Typography variant="h6">Max HP: {c.maxhp}</Typography>
            <Typography variant="h6">Current HP: {c.currhp}</Typography>
            <Typography variant="h6">Temp HP: {c.temphp}</Typography>
            <CircularProgressWithLabel variant="static" value={100 * (c.currhp / c.maxhp)} />
            <ModHealth character={props.character} setState={props.setState} />
          </CardContent>
        </Card>
      </Grid>);
    bar2Edit.push(
      <Grid item xs={12}>
        <Card>
          <CardContent
            className="row-card">
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              label="Max HP" type="number"
              defaultValue={c.maxhp}
              onChange={maxHPOnChange} />
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              label="Current HP" type="number"
              defaultValue={c.currhp}
              onChange={currHPOnChange} />
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              label="Temp HP" type="number"
              defaultValue={c.temphp}
              onChange={tempHPOnChange} />
            <CircularProgressWithLabel variant="static" value={100 * (c.currhp / c.maxhp)} />
          </CardContent>
        </Card>
      </Grid>
    );
  }

  if (props.edit) {
    return bar2Edit;
  } else {
    return bar2NoEdit;
  }
}