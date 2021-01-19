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
      <Typography variant="h6"><Span>Latest Created Task</Span></Typography>
        <ul style={{color: '#537278'}}>
          <li><Span>Clean the room</Span></li>
          <li><Span>{`${"Buy some vegitables, chicken, biryani test match nhi".substring(0, 40)}...`}</Span></li>
          <li><Span><s>Reinstall windo and pc</s></Span></li>
        </ul>
    </Paper>
  );
}