import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { AddFeatureBtn } from './AddBtn';
import { char } from '../utils/data';
import '../style.css';

export default function FeatureBlock(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
}) {
  let c = props.character;

  function createNameOnChangeHandler(index: number): (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    let newOnChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      let newFeat = { ...props.character.features[index] };
      newFeat.name = event.target.value;
      let newFeats = [...props.character.features];
      newFeats[index] = newFeat;
      let newChar: char = {
        ...props.character,
        features: newFeats
      }
      props.setState(newChar);
    }
    return newOnChange;
  }

  function createDetsOnChangeHandler(index: number): (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    let newOnChange = function (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      let newFeat = { ...props.character.features[index] };
      newFeat.value = event.target.value;
      let newFeats = [...props.character.features];
      newFeats[index] = newFeat;
      let newChar: char = {
        ...props.character,
        features: newFeats
      }
      props.setState(newChar);
    }
    return newOnChange;
  }

  let featureAccordion = [];
  for (let i = 0; i < c.features.length; i++) {
    featureAccordion.push(
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{c.features[i].name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{c.features[i].value}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  }

  let featureEditAccordion = [];
  for (let i = 0; i < c.features.length; i++) {
    featureEditAccordion.push(
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <TextField
            label="Feature Name"
            defaultValue={c.features[i].name}
            onChange={createNameOnChangeHandler(i)} />
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Feature Details"
            multiline
            defaultValue={c.features[i].value}
            onChange={createDetsOnChangeHandler(i)} />
        </AccordionDetails>
      </Accordion>
    );
  }

  if (props.edit) {
    return (
      <Grid item xs={6}>
        <Card>
          <CardContent>{featureEditAccordion}</CardContent>
          <CardActions>
            <AddFeatureBtn character={props.character} setState={props.setState} />
          </CardActions>
        </Card>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={6}>
        <Card>
          <CardContent>{featureAccordion}</CardContent>
        </Card>
      </Grid>
    );
  }
}