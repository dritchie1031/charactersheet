import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

export function AddFeatureBtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            fullWidth />
          <TextField
            label="Feature Details"
            multiline
            fullWidth
            rowsMax={6} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Feature
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function AddProfBtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Feature
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="lg">
        <DialogTitle id="form-dialog-title">Add Proficiency</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Proficiency"
            fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Proficiency
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}