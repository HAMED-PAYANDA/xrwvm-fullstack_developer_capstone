<div align="center">

# 🚀 Full-Stack Dealership Review Web Application

The complete implementation of a microservices-oriented web application, featuring React, Django, MongoDB, and deployed via Kubernetes with automated CI/CD pipelines.

[![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)](#)
[![Django](https://img.shields.io/badge/Django-Backend-092E20?style=for-the-badge&logo=django&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](#)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](#)
<!-- Database -->
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![SQLite](https://img.shields.io/badge/SQLite-Auth%20DB-lightgrey?logo=sqlite)
<!-- DevOps -->
![Container Registry](https://img.shields.io/badge/IBM%20Container%20Registry-Active-blue)
<!-- Course / Capstone -->
![IBM](https://img.shields.io/badge/IBM-Full--Stack%20Capstone-blue?logo=ibm)
![Skills Network](https://img.shields.io/badge/Skills%20Network-Certified-success)

</div>

---

## 📌 Project Overview

This repository contains the complete implementation of a full-stack dealership review web application, developed as the final capstone project for the **IBM Full-Stack Software Developer Professional**. 

The project is a showcase of end-to-end software engineering practices. It goes beyond simple web development by integrating a robust REST API backend, a dynamic frontend, dual-database management, continuous integration workflows, and cloud-native Kubernetes deployment.

---

## 🧱 Microservices Architecture

The application is structured around a decoupled, microservices-oriented architecture:

```text
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│  React Frontend │ ────> │  Django Backend │ ────> │ Ext. Sentiment  │
│      (SPA)      │ <──── │   (REST APIs)   │ <──── │ Analysis Engine │
└─────────────────┘       └────────┬────────┘       └─────────────────┘
                                   │
                                   ▼
                          ┌─────────────────┐
                          │ MongoDB & SQLite│
                          │   (Databases)   │
                          └─────────────────┘
```

✨ Key Features

•	🔐 Secure User Authentication: Complete login, logout, and registration workflows managed via SQLite.

•	🚘 Dealership Locator: Browse and filter nationwide dealerships by state.

•	📝 Dynamic Review System: Users can add, read, and manage reviews for specific dealerships.

•	😊 AI Sentiment Analysis: Automatic parsing of user reviews to determine positive, neutral, or negative sentiment.

•	📦 Fully Containerized: Backend services packaged using custom Dockerfiles.

•	🚀 Cloud-Native Deployment: Hosted and orchestrated using IBM Skills Network Kubernetes Clusters.



## 🛠️ Core Tech Stack

| Category | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | React, JavaScript (ES6+), HTML5/CSS3 | Single Page Application (SPA) client interface |
| **Backend API** | Django, Django REST Framework, Python 3.12 | RESTful routing, backend logic, and API endpoints |
| **Databases** | MongoDB, SQLite | Document store for reviews; Relational DB for auth |
| **DevOps & Cloud** | Docker, Kubernetes, GitHub Actions, IBM Cloud | Containerization, orchestration, and CI/CD automation |

🔄 CI/CD Pipeline & DevOps

This repository enforces strict code quality and automated deployment pipelines:

•	Continuous Integration: A GitHub Actions workflow (.github/workflows/main.yml) runs automatically on push and pull_request to the main branch.

•	Automated Linting: Python code is checked via Flake8, and JavaScript code is verified via JSHint, preventing non-compliant code from being merged.

•	Container Registry: The backend environment is packaged into a Docker image, containing a custom entry point for database migrations and static files, which is then pushed to the IBM Cloud Container Registry.

•	Kubernetes Orchestration: The application is deployed using declarative Kubernetes manifests (server/deployment.yaml) with port-forwarding configured for lab access.

•	Merge Protection: Blocks pull requests and prevents non-compliant code from being merged if automated continuous integration checks fail.

Workflow file:
.github/workflows/main.yml

🐳 Containerization
	•	Backend containerized using Docker
	•	Custom Dockerfile with:
	•	Python base image
	•	Dependency installation
	•	Entry point for migrations and static files
	•	Image built and pushed to IBM Cloud Container Registry

⸻

## ☸️ Kubernetes Deployment
	•	Application deployed using a Kubernetes Deployment
	•	Port forwarding used for access in lab environment
	•	Deployment manifest:
  server/deployment.yaml

  The deployment URL is provided in:
  deploymentURL.txt


📁 Repository Structure
```text
xrwvm-fullstack_developer_capstone/
├── .github/workflows/
│   └── main.yml               # CI/CD automated linting pipeline
├── server/
│   ├── djangoapp/             # Core Django application logic
│   ├── djangoproj/            # Django project settings and routing
│   ├── database/              # DB connection configurations
│   ├── frontend/              # React application source code
│   ├── Dockerfile             # Container blueprint
│   ├── entrypoint.sh          # Container startup script
│   └── deployment.yaml        # Kubernetes deployment manifest
├── .flake8                    # Python linting rules
├── deploymentURL.txt          # Live K8s deployment access link
└── README.md                  # Project documentation
```
## ⚙️ Local Setup & Execution

While this application is designed for cloud-native Kubernetes deployment, you can run the services locally for development and testing purposes.

1. Clone the Repository
```bash
git clone [https://github.com/HAMED-PAYANDA/xrwvm-fullstack_developer_capstone.git](https://github.com/HAMED-PAYANDA/xrwvm-fullstack_developer_capstone.git)
cd xrwvm-fullstack_developer_capstone
```

2. Backend Setup (Django)
Open a terminal and navigate to the server directory to start the backend API:
```text
cd server
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

3. Frontend Setup (React)
Open a new terminal window, navigate to the frontend directory, and start the client interface:
```text
cd server/frontend
npm install
npm start
```

4. Running via Docker (Alternative)
If you prefer to run the containerized backend using the included Dockerfile:
```text
cd server
docker build -t dealership-backend .
docker run -p 8000:8000 dealership-backend
```


🎓 Learning Outcomes

This capstone acts as a comprehensive proof of proficiency in:

•	Full-stack web application development

•	RESTful API design and Frontend-backend integration

•	CI/CD best practices and automated testing

•	Docker containerization and Kubernetes orchestration

•	Cloud-native deployment methodologies

👤 Author
Hamed Payanda
•	GitHub: @HAMED-PAYANDA

📜 License: This project is submitted for educational purposes as the Capstone Project for the IBM Full-Stack Software Developer Professional Curriculum.

