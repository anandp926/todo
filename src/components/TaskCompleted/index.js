import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Span from '../StyledComponent/Span';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: 125,
    maxHeight: 125,
    padding: theme.spacing(2),
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6"><Span>Task Completed</Span></Typography>
      <Typography variant="h2">
        <span style={{color:'#5285EC'}}><b>5</b></span><sub style={{fontSize: '23px'}}><Span>/ 20</Span></sub>
      </Typography>
    </Paper>
  );
}