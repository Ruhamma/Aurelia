import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
      <AnimatePresence  >
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
