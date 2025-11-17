import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  // Use Vite's BASE_URL so the router works when the app is served from a subpath
  // (e.g. GitHub Pages at https://<user>.github.io/<repo>/). import.meta.env.BASE_URL
  // is '/' in dev and '/semlab/' in production (as configured in vite.config.js).
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
