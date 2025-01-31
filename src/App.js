import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Project from "./pages/project";

// Import styles
import "./App.css";
import "../src/assets/css/style.css";

// Import PrivateRoute
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? (
            <>
              {/* If not authenticated, handle login page */}
              {/* <Route path="/login" element={<LoginPage />} /> */}
            </>
          ) : (
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              {/* Authenticated Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
