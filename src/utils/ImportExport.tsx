import React from 'react';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { saveAs } from 'file-saver';

import { char, charinfo } from '../utils/data';

export default function ImportExport(props: {
  wholeCharacter: charinfo;
  setWholeCharacter: (newchar: charinfo) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImport = () => {

  }

  const handleExport = () => {
    let exfile = new File([JSON.stringify(props.wholeCharacter)], props.wholeCharacter.basics.name + ".txt", { type: "text/plain;charset=utf-8" })
    saveAs(exfile);
    handleClose();
  }

  return (
    <div>
      <Tooltip title="Import or Export">
        <Fab size="small" color="secondary" onClick={handleClickOpen}>
          <ImportExportIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Import or Export</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Export to a JSON file or import an existing JSON file!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleExport} color="primary">
            Export
          </Button>
          <Button onClick={handleImport} color="secondary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}