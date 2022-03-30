import './App.css';
import  Navigation  from './Components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Login  from './Components/Authentication/Login/Login';
import  UserProfile  from './Components/UserProfile/UserProfile';
import  Register  from './Components/Authentication/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import { PrivateRoute } from './Components/Authentication/PrivateRoute/PrivateRoute';
import Explore from './Components/Explore/Explore';
import Create from './Components/Create/Create';


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

          <PrivateRoute path = "/explore" >
           <Explore></Explore>
          </PrivateRoute>

          
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>

        </Switch>
       </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
