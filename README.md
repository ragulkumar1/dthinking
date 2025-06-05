# CBSE School Website

A modern, responsive website for CBSE schools, built with React, Node.js, and MongoDB.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 🔐 Secure authentication system
- 👥 Multiple user roles (Admin, Teachers, Students, Parents)
- 📚 Academic management
- 📝 News and announcements
- 📊 Student performance tracking
- 🖼️ Media gallery
- 📅 Events calendar
- 📱 Mobile-friendly design
- 🌐 RESTful API

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Redux Toolkit for state management
- React Router for navigation
- React Helmet for SEO
- Chart.js for analytics
- Axios for API calls

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- Winston for logging
- Express Validator
- Multer for file uploads

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cbse-school-website.git
cd cbse-school-website
```

2. Install all dependencies:
```bash
npm run install:all
```

3. Create environment files:

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
```

Backend (.env):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cbse-school
JWT_SECRET=your_jwt_secret
```

### Running the Application

Start both frontend and backend servers:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
cbse-school-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   └── public/
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── utils/
    └── tests/
```

## Key Features

### For Students
- View academic calendar
- Access study materials
- Check attendance
- View exam results
- Submit assignments
- Access library resources

### For Teachers
- Manage classes
- Upload study materials
- Grade assignments
- Track student progress
- Schedule parent-teacher meetings

### For Parents
- Monitor child's progress
- View attendance
- Access report cards
- Pay fees online
- Schedule meetings with teachers

### For Administrators
- Manage school operations
- Handle admissions
- Generate reports
- Manage staff
- Control website content

## API Documentation

The API documentation is available at `/api-docs` when running the backend server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment

### Frontend (Netlify)
1. Connect your GitHub repository to Netlify
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/build`

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set build command: `cd backend && npm install && npm run build`
3. Set start command: `cd backend && npm start`
4. Add environment variables

## Support

For support, email support@cbseschool.com or create an issue in the repository. 