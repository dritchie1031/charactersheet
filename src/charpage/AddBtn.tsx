import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

import { char } from '../utils/data';

export function AddFeatureBtn(props: {
  character: char;
  setState: (newchar: char) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [featName, setName] = React.useState("");
  const [featDets, setDets] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let newChar: char = {
      ...props.character,
      features: props.character.features.concat([{ name: featName, value: featDets }])
    }
    props.setState(newChar);
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
        Add Feature
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="lg">
        <DialogTitle id="form-dialog-title">Add Feature</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Feature Name"
            fullWidth
            onChange={onNameChange} />
          <TextField
            label="Feature Details"
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
            Add Feature
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function AddProfBtn(props: {
  character: char;
  setState: (newchar: char) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [prof, setProf] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let newChar: char = {
      ...props.character,
      otherprofs: props.character.otherprofs.concat([prof])
    }
    props.setState(newChar);
    handleClose();
  }

  function onProfChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProf(event.target.value);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Proficiency
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="lg">
        <DialogTitle id="form-dialog-title">Add Proficiency</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Proficiency"
            fullWidth
            onChange={onProfChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Proficiency
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}