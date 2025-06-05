import React from 'react';
import { Helmet } from 'react-helmet-async';

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    image: '/images/team/principal.jpg',
    bio: 'With over 20 years of experience in education, Dr. Johnson leads our school with a vision for excellence.',
  },
  {
    name: 'Mr. Rajesh Kumar',
    role: 'Vice Principal',
    image: '/images/team/vice-principal.jpg',
    bio: 'Mr. Kumar brings extensive experience in curriculum development and student welfare.',
  },
  {
    name: 'Ms. Priya Sharma',
    role: 'Head of Academics',
    image: '/images/team/academics-head.jpg',
    bio: 'Ms. Sharma oversees our academic programs and ensures high standards of education.',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CBSE School</title>
        <meta name="description" content="Learn about our CBSE School's history, mission, vision, and meet our leadership team." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Our School
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-200">
              Providing quality education and shaping future leaders since 1990
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Our History</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Legacy of Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Founded in 1990, our school has been at the forefront of educational excellence for over three decades.
            </p>
          </div>
          <div className="mt-10">
            <div className="prose prose-lg text-gray-500 mx-auto">
              <p>
                Our journey began with a vision to provide quality education that combines academic excellence with
                holistic development. Over the years, we have grown from a small institution to one of the most
                respected CBSE schools in the region.
              </p>
              <p>
                Today, we continue to uphold our founding principles while embracing modern educational practices
                and technologies. Our commitment to excellence has helped thousands of students achieve their
                dreams and become successful professionals and responsible citizens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide a nurturing environment that fosters academic excellence, character development,
                and social responsibility. We strive to empower students with knowledge, skills, and values
                that prepare them for success in a global society.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a center of excellence in education, recognized for developing well-rounded individuals
                who are prepared to meet the challenges of the future and contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Leadership</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our experienced leadership team is dedicated to providing the best education for your child.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="w-full h-48 object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-primary-600">{member.role}</p>
                    <p className="mt-2 text-gray-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Excellence</h3>
                <p className="mt-2 text-base text-gray-500">
                  Striving for the highest standards in everything we do
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Integrity</h3>
                <p className="mt-2 text-base text-gray-500">
                  Maintaining honesty and strong moral principles
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Embracing new ideas and creative solutions
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Compassion</h3>
                <p className="mt-2 text-base text-gray-500">
                  Showing care and concern for others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 