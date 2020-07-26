import React from 'react';
import OpacityIcon from '@material-ui/icons/Opacity';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { char } from '../utils/data';

export default function ModHealth(props: {
  character: char;
  setState: (newchar: char) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [hp, setHp] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHp(0);
  };

  const handleSubmitHeal = () => {
    let newHP = props.character.currhp + hp;

    if (newHP > props.character.maxhp) {
      newHP = props.character.maxhp;
    } else if (newHP < 0) {
      newHP = 0;
    }

    let newChar: char = {
      ...props.character,
      currhp: newHP
    }
    props.setState(newChar);
    handleClose();
  }

  const handleSubmitTemp = () => {
    let newTemp = hp;

    if (newTemp < 0) {
      newTemp = 0;
    }

    let newChar: char = {
      ...props.character,
      temphp: newTemp
    }
    props.setState(newChar);
    handleClose();
  }

  const handleSubmitDmg = () => {
    let newTempHP = props.character.temphp - hp;
    let newHP;
    if (newTempHP < 0) {
      newHP = props.character.currhp + newTempHP;
      newTempHP = 0;
    } else {
      newHP = props.character.currhp;
    }

    console.log(newHP);
    console.log(newTempHP);

    if (newHP > props.character.maxhp) {
      newHP = props.character.maxhp;
    } else if (newHP < 0) {
      newHP = 0;
    }
    let newChar: char = {
      ...props.character,
      currhp: newHP,
      temphp: newTempHP
    }
    props.setState(newChar);
    handleClose();
  }

  function onHpChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let hpNum = parseInt(event.target.value, 10);
    if (hpNum == NaN) {
      // @TODO Have a snackbar show up
      console.log("Incorrect input");
      return;
    }
    setHp(hpNum);
  }

  return (
    <div>
      <Tooltip title="Heal or Damage">
        <Fab color="secondary" size="small" aria-label="add" onClick={handleClickOpen}>
          <OpacityIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Heal or Take Damage</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="hpmod"
            inputProps={{ style: { textAlign: 'center' } }}
            label="Hit Points"
            type="number"
            onChange={onHpChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmitDmg} color="secondary">
            Damage
          </Button>
          <Button onClick={handleSubmitHeal} color="primary">
            Heal
          </Button>
          <Button onClick={handleSubmitTemp}>
            Temp
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}