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

  function createOnChangeHandler(index: number): (event: React.ChangeEvent<HTMLInputElement>) => void {
    let newOnChange = function (event: React.ChangeEvent<HTMLInputElement>) {
      let newSkills = [...props.character.skills];
      newSkills[index] = event.target.checked;
      let newChar: char = {
        ...props.character,
        skills: newSkills
      }
      props.setState(newChar);
    }
    return newOnChange;
  }

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
        <TableCell align="right"><Checkbox checked={c.skills[i]} onChange={createOnChangeHandler(i)} /></TableCell>
      </TableRow>
    );
    skillRows.push(
      <TableRow key={skillNames[i]}>
        <TableCell component="th" scope="row">
          {skillNames[i]}
        </TableCell>
        <TableCell align="right">{!c.skills[i] ? Math.floor((c.stats[skillStat[i]] - 10) / 2) : Math.floor((c.stats[skillStat[i]] - 10) / 2) + c.prof}</TableCell>
      </TableRow>
    );
  }

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
            {props.edit ? skillRowsEdit : skillRows}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );

}