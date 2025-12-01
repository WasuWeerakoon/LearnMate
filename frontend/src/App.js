import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // <-- Import About page
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Router>
      {/* Blur background when modal open */}
      <div className={showLogin || showRegister ? "blur-sm" : ""}>
        <Navbar
          openLogin={() => setShowLogin(true)}
          openRegister={() => setShowRegister(true)}
        />

        <Routes>
          <Route
            path="/"
            element={<Home openLogin={() => setShowLogin(true)} />}
          />
          <Route
            path="/about"
            element={<About />}
          /> {/* <-- Add About route */}
        </Routes>

        <Footer />
      </div>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute -top-3 -right-3 bg-white text-black text-2xl font-bold w-8 h-8 rounded-full shadow"
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>

            <Login
              openRegister={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            />
          </div>
        </div>
      )}

      {/* REGISTER POPUP */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute -top-3 -right-3 bg-white text-black text-2xl font-bold w-8 h-8 rounded-full shadow"
              onClick={() => setShowRegister(false)}
            >
              ×
            </button>

            <Register
              openLogin={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
            />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
