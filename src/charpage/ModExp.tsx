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

export default function ModExp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            type="number" defaultValue={0} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Exp
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}