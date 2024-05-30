import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    
      <Routes>
        <Route index element={<Home />} />
        <Route path='/register' element={<Signup /> } />
        <Route path='/login' element={<Signin />} />
        <Route path='/messaging' element={<Messaging />} />
        <Route path='/notification' element={<Notifications />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/landingpage' element={<LandingPage />} />
      </Routes>
    
  );
}

export default App;
