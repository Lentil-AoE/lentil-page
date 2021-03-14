import './Reset.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Split} from './Split';
import {Sample} from './Sample';
import {Match} from './Match';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Split}/>
      <Route exact path='/two' component={Sample}/>
      <Route path='/two/match' component={Match}/>
    </Switch>
  );
}

export default App;
