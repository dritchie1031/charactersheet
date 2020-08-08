import { charinfo, char, spellinfo } from './data';
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
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

function generateCharInfo(
  newname: string,
  newrace: string,
  className: string,
  newage: string,
  newheight: string,
  newweight: string,
  spellCaster: boolean,
  spellPoints: boolean,
  spellability: number,
  useExp: boolean
): charinfo {
  let newChar: char = {
    name: newname,
    level: 1,
    exp: useExp ? 0 : -1,
    race: newrace,
    class: className,
    align: "",
    stats: Array(6).fill(10),
    saves: Array(6).fill(false),
    skills: Array(18).fill(false),
    prof: 2,
    ac: 10,
    init: 0,
    speed: 30,
    maxhp: 1,
    currhp: 1,
    temphp: 0,
    otherprofs: [],
    otherpts: [{ name: "Hit Dice", value: 1, max: 1 }],
    features: []
  };
  let newCharInfo: charinfo = {
    basics: newChar
  }

  if (spellCaster) {
    let newSpells: spellinfo = {
      savedc: 10 + newChar.stats[spellability],
      atkbonus: 2 + newChar.stats[spellability],
      spellability: spellability,
      casterlevel: 1,
      spellsknown: [[], []],
      points: spellPoints ? { value: 0, max: 0 } : { value: -1, max: -1 },
      slots: spellPoints ? [] : [-1, 0]
    };
    newCharInfo.sp = newSpells;
  }

  return newCharInfo;

}

function getSteps() {
  return ['General Info', 'Background', 'Preferences'];
}

function getStepContent(stepIndex: number, handlers: ((event: React.ChangeEvent<HTMLInputElement>) => void)[]) {
  switch (stepIndex) {
    case 0:
      return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            onChange={handlers[0]}
            fullWidth
          />
          <TextField
            margin="dense"
            id="race"
            label="Race"
            onChange={handlers[1]}
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
              onChange={handlers[2]}
            >
              <MenuItem aria-label="None" value="" />
              <MenuItem value={"Barbarian"}>Barbarian</MenuItem>
              <MenuItem value={"Bard"}>Bard</MenuItem>
              <MenuItem value={"Cleric"}>Cleric</MenuItem>
              <MenuItem value={"Druid"}>Druid</MenuItem>
              <MenuItem value={"Fighter"}>Fighter</MenuItem>
              <MenuItem value={"Monk"}>Monk</MenuItem>
              <MenuItem value={"Paladin"}>Paladin</MenuItem>
              <MenuItem value={"Ranger"}>Ranger</MenuItem>
              <MenuItem value={"Rogue"}>Rogue</MenuItem>
              <MenuItem value={"Sorcerer"}>Sorcerer</MenuItem>
              <MenuItem value={"Warlock"}>Warlock</MenuItem>
              <MenuItem value={"Wizard"}>Wizard</MenuItem>
            </Select>
          </FormControl>
        </div >);
    case 1:
      return (<div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
        <TextField
          autoFocus
          margin="dense"
          id="age"
          label="Age"
          onChange={handlers[3]}
          fullWidth
        />
        <TextField
          margin="dense"
          id="height"
          label="Height"
          onChange={handlers[4]}
          fullWidth
        />
        <TextField
          margin="dense"
          id="weight"
          label="Weight"
          onChange={handlers[5]}
          fullWidth
        />
      </div >);
    case 2:
      return (<div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
        <div className="create-char-switch" ><Typography>Spells?</Typography><Switch onChange={handlers[6]} /></div>
        <div className="create-char-switch" ><Typography>Spell Points?</Typography><Switch onChange={handlers[7]} /></div>
        <FormControl>
          <InputLabel id="class-form">Spellcasting Ability</InputLabel>
          <Select
            inputProps={{
              name: 'spellability',
              id: 'spell-ability',
            }}
            style={{ minWidth: "100px" }}
            onChange={handlers[11]}
          >
            <MenuItem aria-label="None" value={7} />
            <MenuItem value={0}>Strength</MenuItem>
            <MenuItem value={1}>Dexterity</MenuItem>
            <MenuItem value={2}>Constitution</MenuItem>
            <MenuItem value={3}>Intelligence</MenuItem>
            <MenuItem value={4}>Wisdom</MenuItem>
            <MenuItem value={5}>Charisma</MenuItem>
          </Select>
        </FormControl>
        <div className="create-char-switch" ><Typography>Exp?</Typography><Switch onChange={handlers[10]} /></div>
      </div >);
    default:
      return 'Unknown stepIndex';
  }
}

export default function CreateChar(props: {
  setCharInfo: (newCharInfo: charinfo) => void
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [race, setRace] = React.useState("");
  const [charClass, setClass] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [age, setAge] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [hasSpells, setSpells] = React.useState(false);
  const [spellPoints, setSpellPoints] = React.useState(false);
  const [useExp, setExp] = React.useState(false);
  const [spellability, setSA] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const steps = getSteps();

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleRace(event: React.ChangeEvent<HTMLInputElement>) {
    setRace(event.target.value);
  }

  function handleClass(event: React.ChangeEvent<HTMLInputElement>) {
    setClass(event.target.value);
  }

  function handleAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
  }

  function handleHeight(event: React.ChangeEvent<HTMLInputElement>) {
    setHeight(event.target.value);
  }

  function handleWeight(event: React.ChangeEvent<HTMLInputElement>) {
    setWeight(event.target.value);
  }

  function handleSpells(event: React.ChangeEvent<HTMLInputElement>) {
    setSpells(event.target.checked);
  }

  function handleSpellPoints(event: React.ChangeEvent<HTMLInputElement>) {
    setSpellPoints(event.target.checked);
  }

  function handleExp(event: React.ChangeEvent<HTMLInputElement>) {
    setExp(event.target.checked);
  }

  function handleSpellAbility(event: React.ChangeEvent<HTMLInputElement>) {
    setSA(parseInt(event.target.value));
  }

  let handlers = [handleName, handleRace, handleClass, handleAge, handleHeight,
    handleWeight, handleSpells, handleSpellPoints, handleExp, handleSpellAbility];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = () => {
    setActiveStep(0);
    props.setCharInfo(generateCharInfo(name, race, charClass, age, height, weight, hasSpells, spellPoints, spellability, useExp));
    handleClose();
  };

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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true}>
        <DialogTitle id="form-dialog-title">Create your character</DialogTitle>
        <DialogContent >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </DialogContent>
        <DialogActions style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {activeStep === steps.length ? (
            <div style={{ height: "300px", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
              <Typography>All steps completed!</Typography>
              <Button onClick={handleSave} variant="outlined">Save Character</Button>
            </div>
          ) : (
              <div style={{ height: "300px", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
                {getStepContent(activeStep, handlers)}
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
