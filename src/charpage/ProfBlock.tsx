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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import ExposureIcon from '@material-ui/icons/Exposure';
import Checkbox from '@material-ui/core/Checkbox';
import { findByLabelText } from '@testing-library/react';

import FeatureBlock from './FeatureBlock';
import SkillTable from './SkillTable';
import StatTable from './StatTable';
import HealthBar from './HealthBar';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import Points from './Points';
import ModExp from './ModExp';
import { AddProfBtn, AddFeatureBtn } from './AddBtn';
import ModHealth from './ModHealth';
import { char, feature, points } from '../utils/data';
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
          defaultValue={c.otherprofs[i]} />
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
            <AddProfBtn />
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