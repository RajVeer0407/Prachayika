import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Wedding from "./routes/Wedding";
import ThemeParty from "./routes/ThemeParty";
import BirthdayParty from "./routes/BirthdayParty";
import LoginPage from "./routes/Authentication/Login";
import Register from "./routes/Authentication/Register";


export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prachayika" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/theme-party" element={<ThemeParty />} />
        <Route path="/birthday" element={<BirthdayParty />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
