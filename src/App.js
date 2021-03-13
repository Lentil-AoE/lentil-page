import './Reset.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Home} from './Home';
import {Match} from './Match';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/two/match' component={Match}/>
    </Switch>
  );
}

export default App;
