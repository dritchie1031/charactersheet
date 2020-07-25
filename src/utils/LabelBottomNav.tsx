import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonIcon from '@material-ui/icons/Person';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import ListAltIcon from '@material-ui/icons/ListAlt';

import '../style.css';

export default function LabelBottomNav(props: { goTo0: () => void; goTo2: () => void }) {
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