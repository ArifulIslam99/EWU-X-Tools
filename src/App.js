import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Components/Authentication/Login/Login';
import { UserProfile } from './Components/UserProfile/UserProfile';
import { Register } from './Components/Authentication/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
       <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            
              <Login></Login>
          </Route>
          <Route path = "/profile" >
            <UserProfile></UserProfile>
          </Route>
          
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
       </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
