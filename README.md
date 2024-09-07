# **LUNOVA - Your Daily Gratitude**

A simple web application that allows users to express their daily gratitudes and set personal challenges. Users can sign up, log in, and manage their daily entries, improving their well-being through reflection and goal-setting.

## **Table of Contents**
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## **Features**
* **User Authentication**: Sign up, log in, log out, with secure user management.
* **Gratitudes**: Users can write and view daily gratitude entries.
* **Challenges**: Users can set and track personal challenges.
* **Responsive Design**: Mobile and desktop-friendly design using Tailwind CSS.
  
## **Technologies**
* **Frontend**: React, Tailwind CSS
* **Backend**: Python (Django), Django Rest Framework (DRF)
* **Database**: PostgreSQL
* **Authentication**: Django Allauth (with OAuth integration)
* **Deployment**: Heroku (recommended for deployment)

## **Installation**

### **1. Clone the Repository**
* `git clone https://github.com/yourusername/lunova-daily-gratitude.git`
* `cd lunova-daily-gratitude`

### **2. Backend Setup**
* **Install Dependencies**: Make sure you have Python and virtualenv installed.
  * `cd backend` (Move to your Django project directory)
  * `python3 -m venv env` (Create virtual environment)
  * `source env/bin/activate` (Activate virtual environment)
  * `pip install -r requirements.txt` (Install Python dependencies)

* **Run Migrations**:
  * `python manage.py makemigrations`
  * `python manage.py migrate`

* **Create Superuser** (optional):
  * `python manage.py createsuperuser`

* **Start Backend Server**:
  * `python manage.py runserver`

### **3. Frontend Setup**
* **Install Node.js Dependencies**:
  * `cd frontend` (Move to the React project directory)
  * `npm install` (Install Node.js dependencies)

* **Start Frontend Development Server**:
  * `npm start`

### **4. Environment Variables**
* Create a `.env` file in both the `backend` and `frontend` directories and fill in the required environment variables.

  **Backend**:
  * `SECRET_KEY=<your_django_secret_key>`
  * `DEBUG=True`
  * `ALLOWED_HOSTS=localhost,127.0.0.1`
  * `DATABASE_URL=<your_postgresql_url>`

  **Frontend**:
  * `REACT_APP_API_URL=http://localhost:8000/api`

### **5. Access the Application**
* **Frontend**: Go to `http://localhost:3000/`
* **Backend**: The API runs on `http://localhost:8000/`

## **Usage**

### **1. Sign Up / Log In**
* Users can sign up or log in via the homepage and start creating their personal gratitudes and challenges.

### **2. Gratitudes**
* Add daily gratitude entries using the **Gratitudes** page.
* View a list of all past entries, with the date of submission.

### **3. Challenges**
* Set personal challenges to track your goals.
* View and manage your challenges.

## **Project Structure**

lunova-daily-gratitude/ 
├── backend/ # Django backend code │ 
├── lunova/ # Main Django app │ 
├── api/ # DRF API logic │ 
├── manage.py # Django management script │ 
└── ... # Other backend files 
  ├── frontend/ # React frontend code │ 
  ├── public/ # Public files for React │ 
  ├── src/ # Source files for React app │ 
  ├── package.json # Node.js dependencies │ 
└── ... # Other frontend files 
  ├── README.md # Project documentation 
└── ... # Other project files



## **API Endpoints**

### **Gratitudes API**:
* `GET /api/gratitudes/`: Fetch all gratitudes for the logged-in user.
* `POST /api/gratitudes/`: Create a new gratitude.

### **Challenges API**:
* `GET /api/challenges/`: Fetch all challenges for the logged-in user.
* `POST /api/challenges/`: Create a new challenge.

## **Contributing**

If you want to contribute to this project:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

