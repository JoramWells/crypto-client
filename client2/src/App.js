import {Route, Routes} from 'react-router-dom';

import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/animate/animate.min.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './assets/css/style.css';


import Index from './layouts';
import Login from './layouts/login';
import Register from './layouts/register';
import Account from './layouts/account';
import AdminPanel from './components/AdminPanel';
import HomeDashboard from './components/AdminPanel/HomeDashboard';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/account' element={<Account />} />
      <Route path='/admin-panel' element={<AdminPanel />} />

      <Route path='/dashboard' element={<HomeDashboard />} />


    </Routes >
  );
}

export default App;
