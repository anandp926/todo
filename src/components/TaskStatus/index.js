import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TaskCompletedNumber from '../../components/TaskCompleted';
import LatestCreatedTask from '../../components/LatestCreatedTask';
import TaskCompletedPieChart from '../../components/TaskCompletedPieChart';
import {CardLoaderOne, CardLoaderTwo, CardLoaderThree} from '../../components/ContentLoader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TaskCompletedNumber/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LatestCreatedTask/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {/* <TaskCompletedPieChart/> */}
            <CardLoaderThree/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
