import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonIcon from '@material-ui/icons/Person';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreIcon from '@material-ui/icons/More';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';
import './style.css';
import { charinfo, char, spellinfo, spell } from './utils/data';
import CreateChar from './utils/CreateChar';
import CharacterPage from './charpage/CharacterPage';
import SpellsPage from './spellpage/SpellsPage';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);

let character: charinfo;

function setChar(newchar: charinfo) {
  character = newchar;
}

let basicsTest: char = {
  name: "Test John",
  level: 1,
  exp: 100,
  race: "Human",
  class: "Wizard",
  align: "Lawful Good",
  stats: [10, 14, 16, 18, 8, 7],
  saves: [false, false, false, true, true, false],
  skills: [false, false, true, false, false, true, false, false, true,
    false, false, true, false, false, true, false, false, true],
  prof: 2,
  ac: 12,
  init: +2,
  speed: 30,
  maxhp: 9,
  currhp: 9,
  temphp: 0,
  otherprofs: ["Fire Resistance", "Thieves Tools"],
  otherpts: [{
    value: 1,
    name: "Hit Dice (d8)",
    max: 1
  }, { value: 10, name: "Sorcery Points", max: 20 }],
  features: [
    {
      value: "You can see in the dark out to 60 ft",
      name: "Darkvision"
    }, {
      value: "You regain a number of spell slots equal to half your level",
      name: "Arcane Recovery"
    }
  ]
}

let spellsTest: spellinfo = {
  casterlevel: 10,
  spellsknown: [{
    level: 0,
    known: [{ name: "Mage Armor", description: "Make your unarmored AC 13 + your Dex", prepped: true },
    { name: "Firebolt", description: "Range 120ft., 1d10 fire damage.", prepped: true }]
  }, {
    level: 1,
    known: [{ name: "Mage Armor", description: "Make your unarmored AC 13 + your Dex", prepped: true },
    { name: "Firebolt", description: "Range 120ft., 1d10 fire damage.", prepped: true }]
  }],
  points: false
}

function TagMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Special Pages">
        <Fab onClick={handleClick} size="small">
          <MoreIcon />
        </Fab>
      </Tooltip>
      <Menu
        id="tag-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Combat</MenuItem>
        <MenuItem onClick={handleClose}>Explore</MenuItem>
        <MenuItem onClick={handleClose}>Social</MenuItem>
      </Menu>
    </div>
  );
}

function CharacterAppBar(props: { name: string; startEdit: () => void; edit: boolean; endEdit: () => void }) {
  if (props.edit) {
    return (
      <div style={{ position: "fixed", top: "0px", width: "100%", zIndex: 4 }}>
        <AppBar position="static">
          <Toolbar className="appbar">
            <Typography variant="h5">
              {props.name}
            </Typography>
            <div className="appbaractions">
              <Tooltip title="Save Changes">
                <Fab size="small" color="secondary" onClick={props.endEdit}>
                  <SaveAltIcon />
                </Fab>
              </Tooltip>
              <CreateChar />
              <Tooltip title="Import or Export">
                <Fab size="small" color="secondary" onClick={props.endEdit}>
                  <ImportExportIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Level Up">
                <Fab size="small" onClick={props.endEdit}>
                  <ArrowUpwardIcon />
                </Fab>
              </Tooltip>
              <TagMenu />
            </div>
          </Toolbar>
        </AppBar>
      </div >
    );
  } else {
    return (
      <div style={{ position: "fixed", top: "0px", width: "100%", zIndex: 4 }}>
        <AppBar position="static">
          <Toolbar className="appbar">
            <Typography variant="h5">
              {props.name}
            </Typography>
            <div className="appbaractions">
              <Tooltip title="Edit Info">
                <Fab size="small" color="secondary" onClick={props.startEdit}>
                  <EditIcon />
                </Fab>
              </Tooltip>
              <CreateChar />
              <Tooltip title="Import or Export">
                <Fab size="small" color="secondary" onClick={props.endEdit}>
                  <ImportExportIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Level Up">
                <Fab size="small" onClick={props.endEdit}>
                  <ArrowUpwardIcon />
                </Fab>
              </Tooltip>
              <TagMenu />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

function LabelBottomNavigation(props: { goTo0: () => void; goTo2: () => void }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction label="Character" value="char" onClick={props.goTo0} icon={<PersonIcon />} />
      <BottomNavigationAction label="Background" value="bg" icon={<FingerprintIcon />} />
      <BottomNavigationAction label="Spells" value="spells" onClick={props.goTo2} icon={<FireplaceIcon />} />
      <BottomNavigationAction label="Inventory" value="inv" icon={<ListAltIcon />} />
    </BottomNavigation>
  );
}

/*  
  BG: Fingerprint
  SPELLS: Fireplace
  COMBAT: OfflineBolt
  INVENTORY:  ListAlt
  EXPLORATION: Explore
  SOCIAL: People
  <BottomNavigationAction label="Social" value="soc" icon={<PeopleIcon />} />
  <BottomNavigationAction label="Combat" value="combat" icon={<OfflineBoltIcon />} />

*/

function App() {
  const [basics, setState] = React.useState(basicsTest);
  const [edit, setEdit] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [spells, setSpells] = React.useState(spellsTest);


  const useSetState = function (newchar: char) {
    setState(newchar);
  }

  const useSetSpells = function (newsp: spellinfo) {
    setSpells(newsp);
  }

  function getPage(pageNum: number) {
    switch (pageNum) {
      case 0:
        return (<CharacterPage character={basics} setState={useSetState} edit={edit} />);
      case 2:
        return (<SpellsPage spells={spells} setState={useSetSpells} edit={edit} />);
      default:
        return;
    }
  }

  function setToChar() {
    setPage(0);
  }

  function setToSpells() {
    setPage(2);
  }

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: "#8700c4"
      },
      secondary: {
        main: "#b50000"
      },
      tonalOffset: 0.2
    },
    typography: {
      fontFamily: ["Trebuchet MS", "Helvetica", "sans-serif"].join(',')
    }
  });

  function startEdit() {
    setEdit(true);
  }

  function endEdit() {
    setEdit(false);
  }



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{ marginBottom: "50px" }} >
        <CharacterAppBar name={basics.name} startEdit={startEdit} edit={edit} endEdit={endEdit} />
        {getPage(page)}
        <div className="bot-nav"><LabelBottomNavigation goTo0={setToChar} goTo2={setToSpells} /></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
