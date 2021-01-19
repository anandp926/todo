import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import Span from '../StyledComponent/Span';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 64
  },
  title: {
    flexGrow: 1,
    textAlign: 'start',
    color: "#537278"
  },
  profileImg: {
    borderRadius: 24
  },
  layoutMargin: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar className={classes.layoutMargin}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img height={48} className={classes.profileImg} src="https://avatars2.githubusercontent.com/u/18368796?s=400&u=c3635d01ded71be9c501528d6a0c1ff5d7bf9fb1&v=4" alt="profile" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Andi
          </Typography>
          <Button><span style={{color: "#537278"}}>Logout</span></Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}