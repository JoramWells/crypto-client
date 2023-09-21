import {Route, Routes} from 'react-router-dom';

import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/animate/animate.min.css';
import './css/bootstrap.min.css';
import './css/style.css';
import Index from './layouts';
import Login from './layouts/login';


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />


    </Routes >
  );
}

export default App;
