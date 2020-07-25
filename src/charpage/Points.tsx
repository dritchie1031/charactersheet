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
import { points } from '../utils/data';

export default function Points(props: { pts: points, edit: boolean }) {
  const [open, setOpen] = React.useState(false);
  let p = props.pts;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
              type="number" defaultValue={0} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Add Change
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={6}>
        <Card>
          <CardContent className="point-card">
            <TextField
              margin="dense"
              inputProps={{ style: { textAlign: 'center' } }}
              label="Current Points"
              type="number" defaultValue={p.value} />
            <TextField
              margin="dense"
              inputProps={{ style: { textAlign: 'center' } }}
              label="Max Points"
              type="number" defaultValue={p.max} />
          </CardContent>
        </Card>
      </Grid>
    );
  }

}