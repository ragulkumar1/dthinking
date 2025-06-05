import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const admissionProcess = [
  {
    step: 1,
    title: 'Application Submission',
    description: 'Complete the online application form and submit required documents.',
  },
  {
    step: 2,
    title: 'Document Verification',
    description: 'Our team will verify your submitted documents and academic records.',
  },
  {
    step: 3,
    title: 'Entrance Assessment',
    description: 'Students will be assessed based on their age and grade level.',
  },
  {
    step: 4,
    title: 'Parent Interview',
    description: 'A meeting with parents to discuss expectations and school policies.',
  },
  {
    step: 5,
    title: 'Admission Confirmation',
    description: 'Selected candidates will receive admission confirmation and fee details.',
  },
];

const requirements = [
  {
    title: 'Age Requirements',
    items: [
      'Pre-Primary: 3-5 years',
      'Primary: 5-10 years',
      'Middle School: 10-13 years',
      'Secondary: 13-15 years',
      'Senior Secondary: 15-17 years',
    ],
  },
  {
    title: 'Documents Required',
    items: [
      'Birth Certificate',
      'Previous School Records',
      'Transfer Certificate (if applicable)',
      'Passport Size Photographs',
      'Address Proof',
      'Aadhar Card',
    ],
  },
  {
    title: 'Fee Structure',
    items: [
      'Registration Fee: ₹500',
      'Admission Fee: ₹10,000',
      'Annual Fee: ₹25,000',
      'Monthly Fee: ₹3,000',
      'Transportation Fee: ₹1,500 (optional)',
    ],
  },
];

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    grade: '',
    previousSchool: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Admissions - CBSE School</title>
        <meta name="description" content="Learn about our admission process, requirements, and apply online at CBSE School." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Admissions
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-200">
              Join our community of learners and start your journey towards excellence
            </p>
          </div>
        </div>
      </div>

      {/* Admission Process Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Admission Process
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our streamlined admission process ensures a smooth transition for new students.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {admissionProcess.map((step) => (
                <div key={step.step} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {step.step}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Requirements</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Admission Requirements
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {requirements.map((requirement) => (
                <div key={requirement.title} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{requirement.title}</h3>
                  <ul className="space-y-2">
                    {requirement.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-500">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Apply Now</h2>
            <p className="mt-4 text-lg text-gray-500">
              Fill out the form below to start your admission process
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                  Student Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  id="studentName"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                  Grade Applying For
                </label>
                <select
                  name="grade"
                  id="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select Grade</option>
                  <option value="pre-primary">Pre-Primary</option>
                  <option value="primary">Primary (I-V)</option>
                  <option value="middle">Middle School (VI-VIII)</option>
                  <option value="secondary">Secondary (IX-X)</option>
                  <option value="senior">Senior Secondary (XI-XII)</option>
                </select>
              </div>

              <div>
                <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">
                  Previous School
                </label>
                <input
                  type="text"
                  name="previousSchool"
                  id="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  id="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                rows={3}
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admissions; 