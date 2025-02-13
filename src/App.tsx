import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { User } from './pages/User';
import { About } from './pages/About';
import { Categories } from './pages/Categories';

import { Home } from './pages/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/categorias' element={<Categories/>}/>
        <Route path='/usuario' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
