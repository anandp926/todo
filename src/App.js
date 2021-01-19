import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { HomePage } from './container/pageListAsync';
import './App.css'

const useStyles = makeStyles((theme) => ({
  layoutMargin: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.layoutMargin}>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
