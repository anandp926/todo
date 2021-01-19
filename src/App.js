import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { HomePage } from './container/pageListAsync';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={Login}/> */} 
          <Route render={(props) => (
            <Header {...props}>
            <div className={classes.layoutMargin}>
              <Switch>
                <Route path="/dashboard" exact component={HomePage}/>
                <Route path="/" exact component={HomePage}/>
              </Switch>
            </div>
            </Header>
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
