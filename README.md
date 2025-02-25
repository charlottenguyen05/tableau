# Tableau Interactif

This project is a full-stack interactive table application built with React for the frontend and Express.js with MongoDB for the backend.

![Tableau Interactif](https://i.imgur.com/pz7ESqJ.png)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or cloud instance)

## Getting Started

### Backend

1. **Navigate to the backend directory:**

    ```sh
    cd backend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a [.env](http://_vscodecontentref_/1) file in the [backend](http://_vscodecontentref_/2) directory with the following content:

    ```env
    MONGO_URI="your_mongo_connection_string"
    MONGO_PASSWORD="your_mongo_password"
    PORT="3000"
    FRONTEND_BASEURL="http://localhost:5173"
    ```

4. **Seed the database:** (Only for first time run on the machine)

    Seed the database with initial data, run:

    ```sh
    npm run seed
    ```

5. **Start the backend server:**

    ```sh
    npm run dev
    ```

    The backend server should now be running on `http://localhost:3000`.

### Frontend

1. **Navigate to the frontend directory:**

    ```sh
    cd frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a [.env](http://_vscodecontentref_/3) file in the [frontend](http://_vscodecontentref_/4) directory with the following content:

    ```env
    VITE_BACKEND_URL=http://localhost:3000
    ```

4. **Start the frontend development server:**

    ```sh
    npm run dev
    ```

    The frontend development server should now be running on `http://localhost:5173`.

## Building for Production

To build the frontend for production, run:

```sh
npm run build