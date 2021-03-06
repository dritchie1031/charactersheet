import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import LabelBottomNav from './utils/LabelBottomNav';
import esES from '@material-ui/core/locale';

import { charinfo, char, spellinfo, inventory } from './utils/data';
import CharacterPage from './charpage/CharacterPage';
import SpellsPage from './spellpage/SpellsPage';
import InventoryPage from './invpage/InventoryPage';
import CharacterAppBar from './utils/CharacterAppBar';
import './App.css';
import './style.css';

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

let inv: inventory = {
  money: {
    plat: 1,
    gold: 1,
    silver: 1,
    copper: 1
  },
  items: ["", "", ""]
}

let spellsTest: spellinfo = {
  savedc: 10,
  atkbonus: 2,
  spellability: 3,
  casterlevel: 10,
  spellsknown: [[], []],
  points: { value: -1, max: -1 },
  slots: [{ value: 2, max: 2 }, { value: 1, max: 1 }]
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
  const [inven, setInv] = React.useState(inv);

  function setWholeChar(newCharInfo: charinfo) {
    setState(newCharInfo.basics)
    if (newCharInfo.sp) {
      setSpells(newCharInfo.sp)
    }
  }

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
        return (<SpellsPage character={basics} spells={spells} setState={useSetSpells} edit={edit} />);
      case 3:
        return (<InventoryPage inv={inven} setState={setInv} edit={edit} />);
      default:
        return;
    }
  }

  function setToChar() {
    setPage(0);
  }

  function setToInv() {
    setPage(3);
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
        <CharacterAppBar name={basics.name} startEdit={startEdit} edit={edit} endEdit={endEdit} setWholeChar={setWholeChar} wholeChar={{ basics: basics, sp: spells }} />
        {getPage(page)}
        <div className="bot-nav"><LabelBottomNav goTo0={setToChar} goTo2={setToSpells} goTo3={setToInv} /></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
