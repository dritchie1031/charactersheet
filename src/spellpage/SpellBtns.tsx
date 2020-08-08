import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

import { spellinfo } from '../utils/data';
import { Typography } from '@material-ui/core';

export function AddSpell(props: {
  spells: spellinfo;
  setState: (newspells: spellinfo) => void;
  level: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [spellName, setName] = React.useState("");
  const [spellDets, setDets] = React.useState("");

  let s: spellinfo = props.spells;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let newspells: spellinfo = { ...s }
    newspells.spellsknown[props.level] = s.spellsknown[props.level].concat([{
      name: spellName,
      description: spellDets,
      prepped: false
    }]);
    props.setState(newspells);
    handleClose();
  }

  function onNameChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(event.target.value);
  }

  function onDetsChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setDets(event.target.value);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Spell
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="lg">
        <DialogTitle id="form-dialog-title">Add Feature</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Spell Name"
            fullWidth
            onChange={onNameChange} />
          <TextField
            label="Spell Description"
            multiline
            fullWidth
            rowsMax={6}
            onChange={onDetsChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Spell
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function DeleteSpell(props: {
  spells: spellinfo;
  setState: (newspells: spellinfo) => void;
  level: number;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);

  let s: spellinfo = props.spells;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let newspells: spellinfo = { ...s }
    newspells.spellsknown[props.level].splice(props.index, 1);
    props.setState(newspells);
    handleClose();
  }

  return (
    <div>
      <Chip color="secondary" label="Delete" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete Spell</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <Typography>Delete this spell?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function AddLevel(props: {
  spells: spellinfo;
  setState: (newspells: spellinfo) => void;
}) {

  let s: spellinfo = props.spells;

  const handleClick = () => {
    let newspells: spellinfo = { ...s }
    newspells.spellsknown = s.spellsknown.concat([[]]);
    props.setState(newspells);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add Spell Level
      </Button>
    </div>
  );
}

export function DeleteLevel(props: {
  spells: spellinfo;
  setState: (newspells: spellinfo) => void;
  level: number
}) {

  let s: spellinfo = props.spells;

  const handleClick = () => {
    let newspells: spellinfo = { ...s }
    newspells.spellsknown.splice(props.level, 1);
    props.setState(newspells);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Delete Spell Level
      </Button>
    </div>
  );
}