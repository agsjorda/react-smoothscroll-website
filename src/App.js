import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
