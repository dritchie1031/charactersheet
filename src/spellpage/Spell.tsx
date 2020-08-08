import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import { DeleteSpell } from './SpellBtns';
import { spellinfo, spell } from '../utils/data';
import '../style.css';

const pointCost = [0, 2, 3, 5, 6, 7, 9, 10, 11, 13];

export default function SpellsPage(props: {
  spells: spellinfo;
  setState: (newsp: spellinfo) => void;
  edit: boolean;
  level: number;
  index: number;
}) {
  let s = props.spells;

  function onNameChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newspellsknown: spell[][] = [...s.spellsknown];
    let newspell = { ...s.spellsknown[props.level][props.index] };
    newspell.name = event.target.value;
    newspellsknown[props.level][props.index] = newspell;
    let newSpells: spellinfo = {
      ...s,
      spellsknown: newspellsknown
    }
    props.setState(newSpells);
  }

  function onDescChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newspellsknown: spell[][] = [...s.spellsknown];
    let newspell = { ...s.spellsknown[props.level][props.index] };
    newspell.description = event.target.value;
    newspellsknown[props.level][props.index] = newspell;
    let newSpells: spellinfo = {
      ...s,
      spellsknown: newspellsknown
    }
    props.setState(newSpells);
  }

  function onPrepChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newspellsknown: spell[][] = [...s.spellsknown];
    let newspell = { ...s.spellsknown[props.level][props.index] };
    newspell.prepped = event.target.checked;
    newspellsknown[props.level][props.index] = newspell;
    let newSpells: spellinfo = {
      ...s,
      spellsknown: newspellsknown
    }
    props.setState(newSpells);
  }

  function togglePrep() {
    let newspellsknown: spell[][] = [...s.spellsknown];
    let newspell = { ...s.spellsknown[props.level][props.index] };
    newspell.prepped = !newspell.prepped;
    newspellsknown[props.level][props.index] = newspell;
    let newSpells: spellinfo = {
      ...s,
      spellsknown: newspellsknown
    }
    props.setState(newSpells);
  }

  function castSpell() {
    let newPt = { ...s.points };
    newPt.value -= pointCost[props.level];

    if (newPt.value < 0) {
      newPt.value = 0;
    }
    let newspells: spellinfo = {
      ...s,
      points: newPt
    }
    props.setState(newspells);
  }

  if (props.edit) {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <TextField
            autoFocus
            label="Spell Name"
            fullWidth
            defaultValue={s.spellsknown[props.level][props.index].name}
            onChange={onNameChange} />
          <DeleteSpell spells={s} setState={props.setState} level={props.level} index={props.index} />
          <Checkbox checked={s.spellsknown[props.level][props.index].prepped} onChange={onPrepChange} />
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Spell Description"
            multiline
            fullWidth
            defaultValue={s.spellsknown[props.level][props.index].description}
            onChange={onDescChange} />
        </AccordionDetails>
      </Accordion>
    );
  } else {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Typography style={{ width: "80%" }}>{s.spellsknown[props.level][props.index].name}</Typography>
          {s.spellsknown[props.level][props.index].prepped ? <Chip color="primary" label="Cast" onClick={castSpell} /> : null}
          <Chip label={s.spellsknown[props.level][props.index].prepped ? "Prepped" : "Not Prepped"} onClick={togglePrep} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{s.spellsknown[props.level][props.index].description}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
}