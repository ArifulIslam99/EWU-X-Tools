import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Components/Authentication/Login/Login';
import { UserProfile } from './Components/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            
              <Login></Login>
          </Route>
          <Route path = "/profile" >
            <UserProfile></UserProfile>
          </Route>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
