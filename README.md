<!-- CI / CD -->
[![CI/CD Pipeline](https://github.com/HAMED-PAYANDA/xrwvm-fullstack_developer_capstone/actions/workflows/main.yml/badge.svg)](https://github.com/HAMED-PAYANDA/xrwvm-fullstack_developer_capstone/actions/workflows/main.yml)

<!-- Docker -->
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Docker Build](https://img.shields.io/badge/Docker%20Build-Passing-brightgreen)

<!-- Kubernetes -->
![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployed-blueviolet?logo=kubernetes)
![IBM Cloud](https://img.shields.io/badge/IBM%20Cloud-Kubernetes-blue?logo=ibm)

<!-- Backend -->
![Django](https://img.shields.io/badge/Django-5.x-darkgreen?logo=django)
![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)

<!-- Frontend -->
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES8-yellow?logo=javascript)

<!-- Database -->
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![SQLite](https://img.shields.io/badge/SQLite-Auth%20DB-lightgrey?logo=sqlite)

<!-- DevOps -->
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-black?logo=githubactions)
![Container Registry](https://img.shields.io/badge/IBM%20Container%20Registry-Active-blue)

<!-- Course / Capstone -->
![IBM](https://img.shields.io/badge/IBM-Full--Stack%20Capstone-blue?logo=ibm)
![Skills Network](https://img.shields.io/badge/Skills%20Network-Certified-success)

# fullstack_developer_capstone
## Overview

This repository contains the complete implementation of a full-stack dealership review web application, developed as the final capstone project of the IBM Full-Stack Software Developer Professional Certificate.

The project demonstrates end-to-end software engineering practices, including frontend development, backend APIs, database integration, CI/CD automation, containerization, and Kubernetes deployment in a cloud environment.

⸻

## 🧱 Architecture

The application follows a microservices-oriented, full-stack architecture:
Frontend (React)
        ↓
Django Backend (REST APIs)
        ↓
MongoDB + SQLite
        ↓
External Sentiment Analysis Service

Key Components
	•	Frontend: React (SPA)
	•	Backend: Django (REST APIs)
	•	Database:
	•	MongoDB (dealerships & reviews)
	•	SQLite (authentication)
	•	CI/CD: GitHub Actions (Python + JavaScript linting)
	•	Containerization: Docker
	•	Orchestration: Kubernetes
	•	Cloud Registry: IBM Cloud Container Registry
	•	Deployment: IBM Skills Network Kubernetes Cluster

⸻

## ✨ Features
	•	🔐 User authentication (login, logout, registration)
	•	🚘 View dealerships by state
	•	📝 Add and view reviews for dealerships
	•	😊 Automatic sentiment analysis for reviews
	•	📦 Fully containerized backend
	•	🚀 Deployed on Kubernetes
	•	🔁 Continuous Integration with GitHub Actions

⸻

## 🔧 Technologies Used

Frontend
	•	React
	•	JavaScript (ES6+)
	•	HTML5 / CSS3

Backend
	•	Django
	•	Django REST Framework
	•	Python 3.12

Databases
	•	MongoDB
	•	SQLite

DevOps & Cloud
	•	Docker
	•	Kubernetes
	•	GitHub Actions
	•	IBM Cloud Container Registry
	•	IBM Skills Network Labs

⸻

## 🔄 CI/CD Pipeline

The repository includes a GitHub Actions workflow that automatically:
	•	Runs on push and pull_request to main
	•	Lints Python code using Flake8
	•	Lints JavaScript code using JSHint
	•	Prevents non-compliant code from being merged

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



## 📁 Repository Structure (Code View)

```text
xrwvm-fullstack_developer_capstone/
├── .github/
│   └── workflows/
│       └── main.yml
├── server/
│   ├── djangoapp/
│   ├── djangoproj/
│   ├── database/
│   ├── frontend/
│   ├── Dockerfile
│   ├── entrypoint.sh
│   └── deployment.yaml
├── .flake8
├── .gitignore
├── deploymentURL.txt
├── LICENSE
└── README.md

```


## 🎓 Learning Outcomes

This capstone demonstrates proficiency in:

	•	Full-stack web development
  
	•	RESTful API design
  
	•	Frontend-backend integration

	•	CI/CD best practices
  
	•	Docker & Kubernetes
  
	•	Cloud-native application deployment

⸻

## 👤 Author

Hamed Payanda

Capstone Project — IBM Software Developer Professional.

⸻

## 📜 License

This project is submitted for educational purposes as part of the IBM Full-Stack Software Developer Professional Curriculum.

