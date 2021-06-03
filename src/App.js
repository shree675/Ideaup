import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landing-page/landingpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
