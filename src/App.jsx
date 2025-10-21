import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Security from './components/Security';
import IndividualProducts from './components/IndividualProducts';
import BusinessProducts from './components/BusinessProducts';

export default function App() {
  return (
    <Router basename="/Banking-Website">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/security" element={<Security />} />

        {/* ✅ New product routes */}
        <Route path="/individual-products" element={<IndividualProducts />} />
        <Route path="/business-products" element={<BusinessProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}
