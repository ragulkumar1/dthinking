import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet-async';

const MainLayout: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CBSE School - Excellence in Education</title>
        <meta name="description" content="Welcome to our CBSE School - Providing quality education and holistic development for students." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout; 