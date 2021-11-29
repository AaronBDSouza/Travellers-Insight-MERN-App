import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';
import Place from './places/pages/Place';

const App = () => {
  return <Router>
    <Routes>
      <Route path="/user" element={<Users/>}/>
    </Routes>
    <Routes>
      <Route path="/place" element={<Place/>}/>
    </Routes>    
    <Navigate to="/" />
  </Router>;
}

export default App;
