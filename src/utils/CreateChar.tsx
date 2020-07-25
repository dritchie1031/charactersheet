import { charinfo } from './data';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

function getSteps() {
  return ['General Info', 'Background', 'Preferences'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return (<div>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <FormControl>
          <InputLabel id="class-form">Class</InputLabel>
          <Select
            inputProps={{
              name: 'class',
              id: 'class-form',
            }}
            style={{ minWidth: "100px" }}
          >
            <MenuItem aria-label="None" value="" />
            <MenuItem value={"barb"}>Barbarian</MenuItem>
            <MenuItem value={"bard"}>Bard</MenuItem>
            <MenuItem value={"cleric"}>Cleric</MenuItem>
            <MenuItem value={"druid"}>Druid</MenuItem>
            <MenuItem value={"fight"}>Fighter</MenuItem>
            <MenuItem value={"monk"}>Monk</MenuItem>
            <MenuItem value={"pala"}>Paladin</MenuItem>
            <MenuItem value={"rang"}>Ranger</MenuItem>
            <MenuItem value={"rogue"}>Rogue</MenuItem>
            <MenuItem value={"sorc"}>Sorcerer</MenuItem>
            <MenuItem value={"war"}>Warlock</MenuItem>
            <MenuItem value={"wiz"}>Wizard</MenuItem>
          </Select>
        </FormControl>
      </div >);
    case 1:
      return 'Enter your background information';
    case 2:
      return 'Enter your preferences';
    default:
      return 'Unknown stepIndex';
  }
}

/*function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}*/

export default function CreateChar() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Add New Character">
        <Fab color="primary" size="small" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create your character</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </DialogContent>
        <DialogActions>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
              </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
