import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { PieChart } from 'react-minimal-pie-chart';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    minHeight: 125,
    maxHeight: 125,
    padding: theme.spacing(2),
  },
}));

export default function TaskCompletedPieChart() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {/* <PieChart
        data={[
          { title: 'One', value: 10, color: '#E8ECEC' },
          { title: 'Two', value: 15, color: '#5285EC' },
        ]}
      />; */}
    </Paper>
  );
}