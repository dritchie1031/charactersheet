import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { inventory, weapon } from '../utils/data';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../style.css';

export default function InventoryPage(props: {
  inv: inventory;
  setState: (newinv: inventory) => void;
  edit: boolean;
}) {

  if (props.edit) {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw", marginTop: "50px" }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={3} style={{ padding: "2.5vw", marginTop: "50px" }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}