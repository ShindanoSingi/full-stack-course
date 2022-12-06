import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <h1>My Awesome Blog</h1>
      <div id="page-body">
      <Routes>
      <Route path='about' element={<About/>}/>
      <Route path='home' element={<HomePage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='about' element={<About/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
