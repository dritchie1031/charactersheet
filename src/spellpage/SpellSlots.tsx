import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ExposureIcon from '@material-ui/icons/Exposure';
import { spellinfo } from '../utils/data';

export default function Points(props: {
  spells: spellinfo;
  setState: (newspells: spellinfo) => void;
  edit: boolean;
  level: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [pt, setPts] = React.useState(0);

  let s = props.spells;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPts(0);
  };

  const handleSubmit = () => {
    let newPt = { ...s.slots[props.level] };
    newPt.value = s.slots[props.level].value + pt;

    if (newPt.value < 0) {
      newPt.value = 0;
    } else if (newPt.value > s.slots[props.level].max) {
      newPt.value = s.slots[props.level].max;
    }

    let newslots = [...s.slots];
    newslots[props.level] = newPt;

    let newspells: spellinfo = {
      ...s,
      slots: newslots
    }
    props.setState(newspells);
    handleClose();
  }

  function onPtChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let ptNum: number = parseInt(event.target.value, 10);
    if (ptNum == NaN) {
      // @TODO Have a snackbar show up
      console.log("Incorrect input");
      return;
    }
    setPts(ptNum);
  }

  function onPtCurrChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newPt = { ...s.slots[props.level] };
    newPt.value = parseInt(event.target.value);
    if (newPt.value < 0) {
      newPt.value = 0;
    } else if (newPt.value > s.slots[props.level].max) {
      newPt.value = s.slots[props.level].max;
    }
    let newslots = [...s.slots];
    newslots[props.level] = newPt;

    let newspells: spellinfo = {
      ...s,
      slots: newslots
    }
    props.setState(newspells);
  }

  function onPtMaxChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newPt = { ...s.slots[props.level] };
    newPt.max = parseInt(event.target.value);

    if (newPt.value < 0) {
      newPt.max = 0;
    }

    let newslots = [...s.slots];
    newslots[props.level] = newPt;

    let newspells: spellinfo = {
      ...s,
      slots: newslots
    }
    props.setState(newspells);
  }

  if (!props.edit) {
    return (
      <Grid item xs={3}>
        <Card>
          <CardContent className="point-card">
            <div>
              <Typography variant="caption">Spell Slots</Typography>
              <Typography variant="h6">{s.slots[props.level].value}/{s.slots[props.level].max}</Typography>
            </div>
            <Tooltip title="Modify Points">
              <Fab size="small" onClick={handleClickOpen}>
                <ExposureIcon />
              </Fab>
            </Tooltip>
          </CardContent>
        </Card>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add or Remove Points</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              inputProps={{ style: { textAlign: 'center' } }}
              label="Points"
              type="number"
              onChange={onPtChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Add Change
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  } else {
    return (
      <div>
        <Typography variant="caption">Spell Slots</Typography>
        <TextField
          margin="dense"
          inputProps={{ style: { textAlign: 'center' } }}
          label="Current Points"
          type="number" defaultValue={s.slots[props.level].value}
          onChange={onPtCurrChange}
        />
        <TextField
          margin="dense"
          inputProps={{ style: { textAlign: 'center' } }}
          label="Max Points"
          type="number" defaultValue={s.slots[props.level].max}
          onChange={onPtMaxChange}
        />
      </div>
    );
  }

}