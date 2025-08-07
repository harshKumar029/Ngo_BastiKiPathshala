import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import VolunteerForm from './components/VolunteerForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/VolunteerForm" element={<VolunteerForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;