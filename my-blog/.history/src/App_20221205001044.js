import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";


function App() {
      return (
            <div className="App">
            <NavBar/>
                  <h1>My Awesome Blog</h1>
                  <div id="page-body">
                        <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="about" element={<About />} />
                              <Route
                                    path="articles"
                                    element={<ArticlesListPage />}
                              />
                              <Route
                                    path="articles/:articleId"
                                    element={<ArticlePage />}
                              />
                              <Route path="notFound" element={<NotFoundPage />} />
                        </Routes>
                  </div>
            </div>
      );
}

export default App;
