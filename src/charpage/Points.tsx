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
import { char, points } from '../utils/data';

export default function Points(props: {
  character: char;
  setState: (newchar: char) => void;
  edit: boolean;
  pts: points;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [pt, setPts] = React.useState(0);
  let p: points = props.pts;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPts(0);
  };

  const handleSubmit = () => {
    let newPt = { ...props.character.otherpts[props.index] };
    newPt.value = props.character.otherpts[props.index].value + pt;

    if (newPt.value < 0) {
      newPt.value = 0;
    } else if (newPt.value > props.character.otherpts[props.index].max) {
      newPt.value = props.character.otherpts[props.index].max;
    }

    let newPts = [...props.character.otherpts];
    newPts[props.index] = newPt;
    let newChar: char = {
      ...props.character,
      otherpts: newPts
    }
    props.setState(newChar);
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
    let newPt: points = { ...props.character.otherpts[props.index] };
    newPt.value = parseInt(event.target.value, 10);

    if (newPt.value < 0) {
      newPt.value = 0;
    } else if (newPt.value > props.character.otherpts[props.index].max) {
      newPt.value = props.character.otherpts[props.index].max;
    }

    let newPts = [...props.character.otherpts];
    newPts[props.index] = newPt;
    let newChar: char = {
      ...props.character,
      otherpts: newPts
    }

    props.setState(newChar);
    handleClose();
  }

  function onPtMaxChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newPt: points = { ...props.character.otherpts[props.index] };
    newPt.max = parseInt(event.target.value, 10);
    let newPts = [...props.character.otherpts];
    newPts[props.index] = newPt;
    let newChar: char = {
      ...props.character,
      otherpts: newPts
    }
    props.setState(newChar);
    handleClose();
  }

  function onPtNameChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let newPt: points = { ...props.character.otherpts[props.index] };
    newPt.name = event.target.value;
    let newPts = [...props.character.otherpts];
    newPts[props.index] = newPt;
    let newChar: char = {
      ...props.character,
      otherpts: newPts
    }
    props.setState(newChar);
    handleClose();
  }

  if (!props.edit) {
    return (
      <Grid item xs={4}>
        <Card>
          <CardContent className="point-card">
            <div>
              <Typography variant="caption">{p.name}</Typography>
              <Typography variant="h6">{p.value}/{p.max}</Typography>
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
      <Grid item xs={4}>
        <Card>
          <CardContent className="point-card">
            <div>
              <TextField
                margin="dense"
                inputProps={{ style: { textAlign: 'center' } }}
                label="Points Name"
                defaultValue={p.name}
                onChange={onPtNameChange}
              />
              <TextField
                margin="dense"
                inputProps={{ style: { textAlign: 'center' } }}
                label="Current Points"
                type="number" defaultValue={p.value}
                onChange={onPtCurrChange}
              />
              <TextField
                margin="dense"
                inputProps={{ style: { textAlign: 'center' } }}
                label="Max Points"
                type="number" defaultValue={p.max}
                onChange={onPtMaxChange}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  }

}