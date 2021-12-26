import './App.css';
import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces/>
      </Route>
      <Route path="/places/new" exact>
        <NewPlace/>
      </Route>  
      <Route path="/places/:placeId" exact>
        <UpdatePlace/>
      </Route>
      <Redirect to="/"/>      
    </Switch>
    );
  } else {
    routes = (
    <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces/>
      </Route>
      <Route path="/auth">
        <Auth/>
      </Route>
      <Redirect to="/auth"/>      
    </Switch>
    );
  }

  /* For react-router-dom 6.0.2
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  return <Router>
    <Routes>
      <Route path="/user" element={<App/>}/>
      <Route path="/user" element={<Users/>}/>
      <Route path="/place" element={<Place/>}/>
      <Route path="*" element={<App/>}/>
    </Routes>
  </Router>;*/

    return (
      <AuthContext.Provider 
        value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}
      >
        <Router>
          <MainNavigation/>
            <main>
              {/* Always list "/places/new" before "/places/:placeId" */}
              {routes}  
            </main>
        </Router>
      </AuthContext.Provider>
    );
  

}

export default App;
