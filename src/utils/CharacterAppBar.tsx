import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Tooltip from '@material-ui/core/Tooltip';

import TagMenu from './TagMenu';
import '../style.css';
import CreateChar from './CreateChar';

export default function CharacterAppBar(props: { name: string; startEdit: () => void; edit: boolean; endEdit: () => void }) {
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