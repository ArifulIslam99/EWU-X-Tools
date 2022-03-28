import './App.css';
import  Navigation  from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Login  from './Components/Authentication/Login/Login';
import  UserProfile  from './Components/UserProfile/UserProfile';
import  Register  from './Components/Authentication/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import { PrivateRoute } from './Components/Authentication/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
       <Navigation></Navigation>
        <Switch>
          
          <PrivateRoute exact path = "/" >
            <UserProfile></UserProfile>
          </PrivateRoute>

          <Route exact path="/login">
              <Login></Login>
          </Route>

          <PrivateRoute path = "/profile" >
            <UserProfile></UserProfile>
          </PrivateRoute>

         
          
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
