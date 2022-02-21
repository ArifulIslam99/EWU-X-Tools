import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Components/Authentication/Login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
              <Login></Login>
          </Route>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
