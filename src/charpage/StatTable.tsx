import React from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

import { char } from '../utils/data';
import '../style.css';

export default function StatTable(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
}) {

  let c = props.character;

  function createOnChangeHandlerSave(index: number): (event: React.ChangeEvent<HTMLInputElement>) => void {
    let newOnChange = function (event: React.ChangeEvent<HTMLInputElement>) {
      let newSaves = [...props.character.saves];
      newSaves[index] = event.target.checked;
      let newChar: char = {
        ...props.character,
        saves: newSaves
      }
      props.setState(newChar);
    }
    return newOnChange;
  }

  function createOnChangeHandlerScore(index: number): (event: React.ChangeEvent<HTMLInputElement>) => void {
    let newOnChange = function (event: React.ChangeEvent<HTMLInputElement>) {
      let newStats = [...props.character.stats];
      newStats[index] = parseInt(event.target.value);
      let newChar: char = {
        ...props.character,
        stats: newStats
      }
      props.setState(newChar);
    }
    return newOnChange;
  }

  let statNames = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
  let statRows = [];
  let statRowsEdit = [];
  for (let i = 0; i < c.stats.length; i++) {
    statRowsEdit.push(
      <TableRow key={statNames[i]}>
        <TableCell component="th" scope="row">
          {statNames[i]}
        </TableCell>
        <TableCell align="right">
          <TextField
            inputProps={{ style: { textAlign: 'center' } }}
            label={statNames[i]}
            type="number"
            defaultValue={c.stats[i]}
            onChange={createOnChangeHandlerScore(i)} />
        </TableCell>
        <TableCell align="right">{Math.floor((c.stats[i] - 10) / 2)}</TableCell>
        <TableCell align="right"><Checkbox checked={c.saves[i]} onChange={createOnChangeHandlerSave(i)} /></TableCell>
      </TableRow>
    );
    statRows.push(
      <TableRow key={statNames[i]}>
        <TableCell component="th" scope="row">
          {statNames[i]}
        </TableCell>
        <TableCell align="right">{c.stats[i]}</TableCell>
        <TableCell align="right">{Math.floor((c.stats[i] - 10) / 2)}</TableCell>
        <TableCell align="right">{c.saves[i] ? Math.floor((c.stats[i] - 10) / 2) + c.prof : Math.floor((c.stats[i] - 10) / 2)}</TableCell>
      </TableRow>
    );
  }
  if (props.edit) {
    return (
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table aria-label="Stat table">
            <TableHead>
              <TableRow>
                <TableCell>Stat</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Bonus</TableCell>
                <TableCell align="right">Save Bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statRowsEdit}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>);
  } else {
    return (
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table aria-label="Stat table">
            <TableHead>
              <TableRow>
                <TableCell>Stat</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Bonus</TableCell>
                <TableCell align="right">Save Bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statRows}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>);
  }
}