import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { char } from '../utils/data';

export default function ModExp(props: {
  character: char;
  setState: (newchar: char) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [exp, setExp] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let newExp = props.character.exp + exp;
    if (newExp < 0) {
      newExp = 0;
    }
    let newChar: char = {
      ...props.character,
      exp: newExp
    }
    props.setState(newChar);
    handleClose();
  }

  function onExpChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let expNum = parseInt(event.target.value, 10);
    if (expNum == NaN) {
      // @TODO Have a snackbar show up
      console.log("Incorrect input");
      return;
    }
    setExp(expNum);
  }

  return (
    <div>
      <Tooltip title="Add Exp">
        <Fab color="secondary" size="small" aria-label="add" onClick={handleClickOpen}>
          <AddCircleIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Experience</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="expmod"
            inputProps={{ style: { textAlign: 'center' } }}
            label="Experience"
            type="number"
            onChange={onExpChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Exp
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}