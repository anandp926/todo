import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  newTaskButton: {
    margin: 10
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#5285EC', 0.15),
    '&:hover': {
      backgroundColor: fade('#5285EC', 0.25),
    },
    margin: 10,
    width: '100%'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default function NewTaskDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClickClose = () => {
    onClose()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        <Button variant="text" disableRipple>
        <AddIcon/> New Task
        </Button>
      </DialogTitle>
      <div className={classes.search}>
        <InputBase
          placeholder="Task Name"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button 
        onClick={handleClickClose} 
        variant="contained" color="primary" 
        className={classes.newTaskButton}
      >
          <AddIcon/> New Task
      </Button>
    </Dialog>
  );
}
