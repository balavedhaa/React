import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigati from './components/Navigation';
import Navbar from './components/NavLayout';
import Blog from './components/Blog';
import Apps from './components/ReactApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} >
          <Route index element={<Navigati />} />
          <Route path='blog' element ={<Blog />} />
          <Route path='reactApp' element ={<Apps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
