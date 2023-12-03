import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home/home';
import Stats from './pages/stats/stats';
import Profile from './pages/profile/profile';
import Recipes from './pages/recipes/recipes';
// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/stats" Component={Stats} />
           <Route path="/profile" Component={Profile} />
          <Route path="/recipes" Component={Recipes} />
          {/*<Route path="/login" component={Login} /> */}
      </Routes>
    </Router>
  );
}

export default App;
