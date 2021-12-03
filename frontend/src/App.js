import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import Place from './places/pages/Place';
import MainNavigation from './shared/components/Navigation/MainNavigation';

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
            <Route path="/places/new" exact>
              <Place/>
            </Route>  
            <Redirect to="/" />      
          </Switch>
        </main>
    </Router>
  

}

export default App;
