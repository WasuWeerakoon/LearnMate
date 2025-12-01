import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // New Contact page
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        </Routes>

        <Footer />
      </div>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Login
            onClose={() => setShowLogin(false)}
            openRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          />
        </div>
      )}

      {/* REGISTER POPUP */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Register
            onClose={() => setShowRegister(false)}
            openLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          />
        </div>
      )}
    </Router>
  );
}

export default App;
