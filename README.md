# Wow Care Family Salon - Website

A beautiful, professional beauty salon website built for Wow Care Family Salon in Basavanagudi, Bengaluru.

![Wow Care Logo](https://customer-assets.emergentagent.com/job_family-beauty-hub/artifacts/hddpbwqx_image.png)

## 🌟 Features

- **6 Complete Pages**: Home, About, Services, Gallery, Testimonials, Contact
- **Booking System**: Phone & WhatsApp integration
- **Google Maps**: Location integration
- **Social Media**: Instagram & Facebook links
- **Responsive Design**: Mobile, tablet, and desktop friendly
- **Professional Gallery**: 15+ high-quality salon images
- **Customer Reviews**: Showcase of 4.9/5 star rating

## 📋 Tech Stack

### Frontend
- React 19
- React Router v7
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons
- Sonner (Toast Notifications)

### Backend
- FastAPI
- MongoDB (Motor - Async driver)
- Python 3.x

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- MongoDB

### Frontend Setup

```bash
cd frontend
yarn install
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

The backend will run on `http://localhost:8001`

### Environment Variables

#### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

#### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=wowcare_salon
```

## 📁 Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── pages/          # All page components
│   │   ├── components/     # Reusable components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utility functions
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.py           # FastAPI application
│   └── requirements.txt
└── README.md
```

## 🎨 Design Features

- Rose gold, beige, white & black color palette
- Smooth animations and transitions
- Card-based layouts with shadows
- Professional typography
- Custom scrollbar styling
- Hover effects and micro-interactions

## 📞 Contact Information

- **Phone**: +91 93413 43216
- **Email**: wowcare.co.in@gmail.com
- **Instagram**: [@wowcare_beauty](https://www.instagram.com/wowcare_beauty)
- **Facebook**: [Wow Care Family Salon](https://www.facebook.com/share/1BqzGAGyFP/)
- **Location**: Basavanagudi, Bengaluru, Karnataka - 560004

## 📄 Pages Overview

1. **Home**: Hero section, services overview, testimonials, CTAs
2. **About**: Salon story, values, team showcase, statistics
3. **Services**: Detailed service catalog with pricing
4. **Gallery**: Filterable image gallery with lightbox
5. **Testimonials**: Customer reviews with ratings
6. **Contact**: Booking form, contact info, Google Maps

## 🔧 Available Scripts

### Frontend
- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests

### Backend
- `uvicorn server:app --reload` - Start development server
- `python -m pytest` - Run tests

## 🌐 Deployment

The website can be deployed to:
- **Frontend**: Vercel, Netlify, AWS S3
- **Backend**: Railway, Heroku, AWS EC2
- **Database**: MongoDB Atlas

## 👨‍💻 Developer

**Developed by Praveen Chandra**
- GitHub: [@praveen-ct](https://github.com/praveen-ct)

## 📝 License

© 2026 Wow Care Family Salon. All rights reserved.

---

**Women-Owned Business** 💜
