# MERN Website for Database Table Analysis with Gemini API

## Project Description

This project is a **MERN (MongoDB, Express.js, React.js, Node.js)** website designed to process natural language queries and identify relevant database tables from a provided schema. It leverages the **Google Gemini API** to understand user queries and map them to database schema elements.

## Functionality

- **Natural Language Query Input:** Users can enter natural language queries through a web interface.
- **Database Schema Parsing:** The backend parses a database schema from a JSON file, extracting table names and column names.
- **Gemini API Integration:** The application sends the user's natural language query and the database schema information to the **Google Gemini API**.
- **Relevant Table Identification:** The **Gemini API** analyzes the query and schema and returns a list of database tables that are most relevant to the user's intent.
- **Frontend Display:** The frontend displays the list of relevant tables identified by the **Gemini API** to the user.

## Technologies Used

### **Frontend:**
- **React.js** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server for modern web projects
- **Axios** - Promise-based HTTP client for making requests to the backend

### **Backend:**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Minimalist web application framework for Node.js
- **google-generativeai** - Google Gemini API client library for Node.js
- **dotenv** - Loads environment variables from a `.env` file
- **cors** - Middleware for enabling Cross-Origin Resource Sharing

### **Database (Conceptual):**
- **MongoDB** - NoSQL database (MongoDB is part of the MERN stack, but this version of the project focuses on schema analysis and does not directly interact with a database for data storage.)



## Setup Instructions

### **Prerequisites**

- **Node.js** (version 20 or higher recommended) and npm (Node Package Manager) installed.
- **MongoDB** installed and running locally or access to a **MongoDB Atlas** cluster (though MongoDB is not directly used in this version, having it installed is part of the MERN stack setup).
- A **Google Gemini API key**. You'll need to obtain an API key from **Google AI Studio**.

### **Backend Setup**

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory:
   ```bash
   touch .env
   ```
4. Open `.env` and add your **Gemini API key** and optionally configure the port:
   ```ini
   GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
   PORT=5000  # Optional: Change port if needed
   ```
   **Important:** Replace `YOUR_GEMINI_API_KEY_HERE` with your actual **Gemini API key**. Do **not** commit the `.env` file to version control for security reasons.
5. Run the backend server:
   ```bash
   node server.js
   ```
   The server should start and you should see the message:
   ```bash
   Server listening on port 5000
   ```

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Initialize the Vite React app and install dependencies:
   ```bash
   npm create vite@latest client --template react
   cd client
   npm install
   npm install axios
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   This will start the **Vite development server**. Open your browser and go to the address shown in the terminal (usually **http://localhost:5173**).

## How to Run the Application

1. Start the **backend server** in one terminal window (from the `backend` directory):
   ```bash
   node server.js
   ```
2. Start the **frontend development server** in another terminal window (from the `frontend/client` directory):
   ```bash
   npm run dev
   ```
3. Access the application in your browser at the **URL provided by Vite** (e.g., **http://localhost:5173**).
4. Enter your **natural language query** in the input field on the website.
5. Click **"Analyze Query"**.
6. The website will display the list of relevant **database tables** identified by the **Gemini API** based on your query and the provided schema.

## Usage Example

### **Query:**
```plaintext
Show me customer orders for products named apples
```

### **Expected Output:**
The application should display relevant tables such as:
- **Orders**
- **Order_Items**
- **Products**
- **Customers**

These tables are identified as relevant because they contain information about **orders, items within orders, product names, and customer details**, which are all related to the user's query.

## Environment Variables

### **backend/.env:**
- `GEMINI_API_KEY`: **Required**. Your Google Gemini API key. **Keep this secret and do not commit to version control.**
- `PORT`: **Optional**. Port for the backend server to listen on (default is `5000`).

## Further Development

This is a **basic implementation** and can be extended in several ways:

- **Enhanced Error Handling:** Implement more robust error handling in both frontend and backend to gracefully manage **API errors, network issues, and invalid user inputs**.
- **Improved Frontend Styling:** Enhance the **user interface** with CSS styling to improve visual appeal and user experience.
- **Database Query Execution:** Extend the backend to **not only identify relevant tables** but also to execute actual **database queries** based on the **NL query and schema**, and return **data** to the frontend.
- **Schema Management:** Allow users to **upload or select different database schemas dynamically** through the frontend.
- **Security Enhancements:** Implement **security best practices** for **API key management, input validation, and secure communication (HTTPS)** for a production-ready application.
- **Deployment:** Deploy the **MERN application** to a cloud hosting platform like **Heroku, Netlify, AWS, or Google Cloud** to make it accessible online.

## Contact
- GLK Abhiram Reddy (1CR22IS049)
- Kabir Ahmed (1CR22IS065)
