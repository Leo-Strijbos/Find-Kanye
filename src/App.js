import './App.css';
import Home from './screens/home.js'
import winScreen from './screens/winscreen';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Default from "./screens/default"

const App = props => (
  <Router>
        <Switch>
              <Route exact path="/win" component={winScreen}/>
              <Route exact path="/game" component={Home}/>
              <Route exact path="/" component={Default}/>

              {/* for the links to work, there should be link elements, not a elements */}
          </Switch>
    </Router>
);


export default App;