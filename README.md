# 🌍 Wanderlust — Travel & Destination Platform

Wanderlust is a full-stack travel and destination platform where users can explore destinations, view detailed travel information, create bookings, and manage their travel experiences through a modern web interface.

The application includes authentication, destination management, booking functionality, Google login, responsive UI, and toast-based user notifications.

## ✨ Features

* 🏠 Modern travel-focused homepage
* 🌍 Browse all available destinations
* 🔎 Destination search interface
* 📍 Destination details with:

  * Destination name
  * Country
  * Category
  * Price
  * Duration
  * Description
  * Highlights
  * Departure date
  * Destination image
* ➕ Add new destinations
* 🎫 Book travel destinations
* 📋 View personal bookings
* 🔐 Email/password authentication
* 🔵 Google authentication
* 👤 User profile information
* 🖼️ User profile avatar support
* 🔔 Toast notifications for user feedback
* 📱 Responsive user interface
* ⚡ Next.js App Router
* 🗄️ MongoDB database integration
* 🔒 JWT-related authentication utilities
* 🌐 Separate frontend and backend architecture

## 🛠️ Technologies Used

### Frontend

* Next.js 16
* React 19
* Tailwind CSS 4
* HeroUI
* Gravity UI
* Fluent UI React Icons
* React Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* CORS
* dotenv
* JOSE

### Authentication

* Better Auth
* Google OAuth
* MongoDB Adapter
* Session-based authentication

### Deployment

* Vercel

## 📁 Project Structure

```text
wanderlust-project/
│
├── wanderlust/
│   ├── app/
│   │   ├── page.js
│   │   ├── destination/
│   │   ├── add-destination/
│   │   ├── booking/
│   │   ├── login/
│   │   └── signup/
│   │
│   ├── components/
│   │   ├── Navbar
│   │   ├── Banner
│   │   ├── Footer
│   │   └── ...
│   │
│   ├── public/
│   │   └── assets/
│   │
│   ├── package.json
│   └── ...
│
└── wanderlast-server/
    ├── index.js
    ├── package.json
    └── ...
```

> The exact structure may contain additional components and files depending on the current development version.

## 🔐 Authentication

Wanderlust provides multiple authentication options:

### Email & Password

Users can create an account and log in using their email and password.

### Google Login

Users can also authenticate using their Google account.

After successful Google authentication, user information such as the name, email, and profile image can be available through the authentication session.

```text
Google Account
      ↓
Google OAuth
      ↓
Better Auth
      ↓
User Session
      ↓
Wanderlust
```

## 🌍 Destination Management

Users can browse available destinations from the destination page.

Each destination can contain information such as:

```text
Destination Name
Country
Category
Price
Duration
Departure Date
Image
Description
Highlights
```

The application currently includes destination examples such as Bali, Manila, Venice, and California Island.

## 🎫 Booking System

Users can book available destinations and view their booking information from the **My Bookings** page.

Booking information includes details such as:

* Destination
* Booking date
* Price
* Booking ID
* User information

## 🔔 Notifications

The application uses **React Hot Toast** for displaying user-friendly notifications.

Examples include:

* Successful login
* Successful signup
* Booking confirmation
* Destination creation
* Error messages
* Authentication feedback

## 🗄️ Database

MongoDB is used as the primary database.

The frontend authentication system uses the MongoDB adapter provided by Better Auth.

The backend also uses the official MongoDB Node.js driver.

## ⚙️ Environment Variables

Create a `.env` file for the frontend and backend where required.

### Frontend

```env
# Authentication
BETTER_AUTH_SECRET=your_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret

# Backend/API
NEXT_PUBLIC_API_URL=your_backend_url
```

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

> Never commit `.env` files or secret credentials to GitHub.

Add the following to `.gitignore`:

```gitignore
.vercel
.env*
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Go to the frontend

```bash
cd wanderlust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:3000
```

### 5. Start the backend

Open another terminal:

```bash
cd wanderlast-server
npm install
```

Then start the server:

```bash
node index.js
```

or, if you configure a development script with Nodemon:

```bash
nodemon index.js
```

## 📦 Frontend Dependencies

Some of the major frontend packages include:

```text
next
react
react-dom
better-auth
@better-auth/mongo-adapter
@heroui/react
@heroui/styles
@gravity-ui/uikit
@fluentui/react-icons
react-icons
react-hot-toast
mongodb
```

## 📦 Backend Dependencies

```text
express
cors
dotenv
mongodb
jose-cjs
```

## 🌐 Live Demo

🚀 **Live Website:**

https://wanderlust-ochre-seven.vercel.app/

## 📄 Main Routes

| Route              | Description           |
| ------------------ | --------------------- |
| `/`                | Home page             |
| `/destination`     | All destinations      |
| `/add-destination` | Add a new destination |
| `/booking`         | User bookings         |
| `/login`           | Login page            |
| `/signup`          | Signup page           |

## 🎨 UI

The homepage contains:

* Hero/banner section
* Travel search interface
* Destination navigation
* Call-to-action buttons
* Newsletter section
* Footer
* Responsive navigation

The destination page provides destination cards with pricing, duration, country, and destination information.

## 🔒 Security

The project uses environment variables for sensitive configuration.

Sensitive information such as:

* Database credentials
* Authentication secrets
* Google OAuth secrets
* API keys

should never be committed to the repository.

## 🚀 Deployment

The frontend is deployed using Vercel.

For production deployment:

1. Connect the repository to Vercel.
2. Configure the required environment variables.
3. Set the correct build configuration.
4. Deploy the application.

## 📌 Future Improvements

Possible future improvements include:

* Advanced destination filtering
* Destination search functionality
* Admin dashboard
* Role-based authorization
* Payment integration
* Booking cancellation
* Reviews and ratings
* User profile management
* Travel recommendations
* Improved booking management

## 👨‍💻 Author

**Moajjem Hossain**

Full Stack Developer | MERN / Next.js

GitHub: `moajjem441`

---

⭐ If you find this project useful, consider giving the repository a star.
