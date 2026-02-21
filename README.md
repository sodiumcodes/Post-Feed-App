# Post Feed App

A simple social media application where users can create image posts with captions and view a feed of all shared posts.

## 🚀 Features

- **Post Creation**: Upload images with captions.
- **Image Storage**: Integrated with ImageKit.io for optimized image hosting.
- **Live Feed**: View a chronological feed of all posts.
- **RESTful API**: Decoupled backend architecture.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React (Vite)
- **Routing**: React Router
- **HTTP Client**: Axios
- **Styling**: CSS Modules / Vanilla CSS

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas) via Mongoose
- **File Handling**: Multer (Memory Storage)

### Cloud Services
- **Storage**: [ImageKit.io](https://imagekit.io/)

## 📂 Project Structure

```text
post-feed-app/
├── client/              # React frontend application (Vite)
│   └── feed/
│       ├── src/
│       │   ├── pages/   # Application pages (Feed, Create Post, etc.)
│       │   ├── App.jsx  # Main application component
│       │   └── main.jsx # Entrance point
├── server/              # Node.js/Express backend
│   ├── config/          # Database configuration
│   ├── models/          # Mongoose schemas (Post)
│   ├── services/        # External service integrations (ImageKit)
│   ├── src/             # Express app setup and routes
│   └── server.js        # Main entry point for the server
└── README.md            # Project documentation
```

## 🛠️ Setup and Installation

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)
- [ImageKit.io](https://imagekit.io/) account

### Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your credentials:
   ```env
   IMAGEKIT_PRIVATE_KEY=your_private_key
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

### Frontend Setup
1. Navigate to the `client/feed` directory:
   ```bash
   cd client/feed
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📡 API Endpoints

### Posts
- **POST `/create-post`**: Creates a new post.
  - Body: `multipart/form-data` (image, caption)
- **GET `/all-posts`**: Retrieves all posts.

## 📝 License
This project is licensed under the ISC License.
