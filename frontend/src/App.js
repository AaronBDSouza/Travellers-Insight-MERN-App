import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

const App = () => {
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

    return <Router>
      <MainNavigation/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Users/>
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces/>
            </Route> 
            {/* Always list "/places/new" before "/places/:placeId" */}
            <Route path="/places/new" exact>
              <NewPlace/>
            </Route>  
            <Route path="/places/:placeId" exact>
              <UpdatePlace/>
            </Route>
            <Route path="/auth">
              <Auth/>
            </Route>                         
            <Redirect to="/" />      
          </Switch>
        </main>
    </Router>
  

}

export default App;
