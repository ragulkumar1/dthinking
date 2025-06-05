import React from 'react';
import { Helmet } from 'react-helmet-async';

const programs = [
  {
    name: 'Primary School (Classes I-V)',
    description: 'Foundation years focusing on basic skills and holistic development.',
    features: [
      'Activity-based learning',
      'Focus on reading and numeracy',
      'Creative arts and physical education',
      'Social and emotional development',
    ],
  },
  {
    name: 'Middle School (Classes VI-VIII)',
    description: 'Building on fundamentals with an emphasis on critical thinking.',
    features: [
      'Subject-specific teachers',
      'Project-based learning',
      'Computer education',
      'Sports and extracurricular activities',
    ],
  },
  {
    name: 'Secondary School (Classes IX-X)',
    description: 'Preparing for board examinations with comprehensive study programs.',
    features: [
      'CBSE curriculum',
      'Regular assessments',
      'Career counseling',
      'Board exam preparation',
    ],
  },
  {
    name: 'Senior Secondary (Classes XI-XII)',
    description: 'Specialized streams preparing students for higher education.',
    features: [
      'Science, Commerce, and Humanities streams',
      'Expert faculty',
      'Practical laboratory sessions',
      'Career guidance and counseling',
    ],
  },
];

const facilities = [
  {
    name: 'Smart Classrooms',
    description: 'Technology-enabled learning spaces with interactive whiteboards and digital resources.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Science Labs',
    description: 'Well-equipped laboratories for Physics, Chemistry, and Biology with modern equipment.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Library',
    description: 'Extensive collection of books, journals, and digital resources for research and reading.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: 'Sports Complex',
    description: 'Modern sports facilities including indoor and outdoor games, swimming pool, and gymnasium.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Academics: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Academics - CBSE School</title>
        <meta name="description" content="Explore our academic programs, curriculum, and state-of-the-art facilities at CBSE School." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Academics
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-200">
              Comprehensive education following CBSE curriculum with focus on holistic development
            </p>
          </div>
        </div>
      </div>

      {/* Academic Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Programs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Academic Programs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our comprehensive academic programs are designed to nurture young minds and prepare them for future success.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {programs.map((program) => (
                <div key={program.name} className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900">{program.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{program.description}</p>
                    <ul className="mt-4 space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Facilities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              State-of-the-Art Facilities
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our campus is equipped with modern facilities to support learning and development.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {facilities.map((facility) => (
                <div key={facility.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {facility.icon}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{facility.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to join our academic community?</span>
            <span className="block">Start your journey today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            We're accepting applications for the upcoming academic year. Don't miss this opportunity to be part of our community.
          </p>
          <a
            href="/admissions"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Academics; 