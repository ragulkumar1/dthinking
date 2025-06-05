import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Students from './pages/admin/Students';
import Teachers from './pages/admin/Teachers';
import Events from './pages/admin/Events';
import News from './pages/admin/News';

// Store
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="academics" element={<Academics />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="events" element={<Events />} />
              <Route path="news" element={<News />} />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </Provider>
  );
}

export default App; 