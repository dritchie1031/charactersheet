import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { AddProfBtn } from './AddBtn';
import { char } from '../utils/data';
import '../style.css';

export default function CharacterPage(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
}) {
  let c = props.character;

  function createOnChangeHandler(index: number): (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    let newOnChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      let newProfs = [...props.character.otherprofs];
      newProfs[index] = event.target.value;
      let newChar: char = {
        ...props.character,
        otherprofs: newProfs
      }
      props.setState(newChar);
    }
    return newOnChange;
  }

  let profList = [];
  for (let i = 0; i < c.otherprofs.length; i++) {
    profList.push(
      <ListItem>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary={c.otherprofs[i]} />
      </ListItem>
    );
  }

  let profListEdit = [];
  for (let i = 0; i < c.otherprofs.length; i++) {
    profListEdit.push(
      <ListItem>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <TextField
          label="Proficiency"
          multiline
          defaultValue={c.otherprofs[i]}
          onChange={createOnChangeHandler(i)} />
      </ListItem>
    );
  }

  if (props.edit) {
    return (
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <List>
              {profListEdit}
            </List>
          </CardContent>
          <CardActions>
            <AddProfBtn character={props.character} setState={props.setState} />
          </CardActions>
        </Card>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <List>
              {profList}
            </List>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}