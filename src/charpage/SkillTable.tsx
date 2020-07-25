import React from 'react';
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

export default function SkillTable(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
}) {
  let c = props.character;

  let skillNames = [
    'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History',
    'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception',
    'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'
  ];
  let skillStat = [
    1, 4, 3, 0, 5, 3,
    4, 5, 3, 4, 3, 4,
    5, 5, 3, 1, 1, 4
  ]
  let skillRows = [];
  let skillRowsEdit = [];
  for (let i = 0; i < c.skills.length; i++) {
    skillRowsEdit.push(
      <TableRow key={skillNames[i]}>
        <TableCell component="th" scope="row">
          {skillNames[i]}
        </TableCell>
        <TableCell align="right">{c.skills[i] ? <Checkbox defaultChecked /> : <Checkbox />}</TableCell>
      </TableRow>
    );
    skillRows.push(
      <TableRow key={skillNames[i]}>
        <TableCell component="th" scope="row">
          {skillNames[i]}
        </TableCell>
        <TableCell align="right">{c.skills[i] ? Math.floor((c.stats[skillStat[i]] - 10) / 2) : Math.floor((c.stats[skillStat[i]] - 10) / 2) + c.prof}</TableCell>
      </TableRow>
    );
  }

  if (props.edit) {
    return (
      <Grid item xs={6}>
        <TableContainer component={Paper} style={{ maxHeight: "375px", overflowY: "scroll" }}>
          <Table aria-label="Skill table">
            <TableHead>
              <TableRow>
                <TableCell>Skill</TableCell>
                <TableCell align="right">Bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillRowsEdit}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={6}>
        <TableContainer component={Paper} style={{ maxHeight: "375px", overflowY: "scroll" }}>
          <Table aria-label="Skill table" >
            <TableHead>
              <TableRow>
                <TableCell>Skill</TableCell>
                <TableCell align="right">Bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skillRows}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}