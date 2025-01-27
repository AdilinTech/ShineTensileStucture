import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { useState } from "react";
import PrivateRoute from "./privateRoute/PrivateRoute";
import LoginPage from "./component/LoginPage";
import Contact from "./pages/contact";
import  "../src/assets/css/style.css"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/login" element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route
                path=""
                element={<PrivateRoute isAuthenticated={isAuthenticated} />}
              >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
