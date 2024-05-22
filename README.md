# TaskManager-W3Villa

This is a simple Task Manager application with a frontend and backend component. It allows users to manage their tasks efficiently.

## Backend

The backend folder contains the server-side code for the Task Manager application.

## Installation

Navigate to the backend folder:

```bash
   cd backend
   npm install
```

### Configuration

Create a .env file in the backend folder and provide the following configuration variables:

```bash
   PORT=4000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_uri
```

### Running the Backend

To run the backend server, execute the following command:

```bash
   npm run dev

```

## Frontend

The frontend folder contains the client-side code for the Task Manager application.

### Installation

Navigate to the frontend folder and
Install dependencies

```bash
   cd frontend
   npm install
```

### Running the Frontend

To run the frontend application, execute the following command:

```bash
   npm start
```

## Usage

Once both the frontend and backend servers are running, you can access the Task Manager application by navigating to http://localhost:3000 in your web browser. From there, you can register, login, create tasks, and manage them as needed.

## Technology Used

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Tokens (JWT) for authentication
- Frontend:
  - React.js
  - Redux
  - Axios
