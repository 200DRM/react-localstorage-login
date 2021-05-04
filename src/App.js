import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Body from './components/Body';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route 
          component={Dashboard} 
          exact
          path='/dashboard'  
        />
        <Route 
          component={Body} 
          exact
          path='/'  
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
