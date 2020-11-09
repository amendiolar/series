
import './App.css';
import HomeBusqueda from './components/HomeBusqueda';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Switch>

            <HomeBusqueda></HomeBusqueda>
            </Switch>
          </Router>

      </header>
    </div>
  );
}

export default App;
