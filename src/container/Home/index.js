import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskStatus from '../../components/TaskStatus';
import TaskList from '../../components/TaskList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TaskStatus/>
      <TaskList/>
    </div>
  );
}
