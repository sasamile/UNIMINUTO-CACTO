### Enlace CMS: https://cms-cacto-uniminuto.vercel.app/
### Enlace UI : https://ui-cacto.vercel.app/

UNIMINUTO-CACTO Project

Overview

The UNIMINUTO-CACTO project is a web application developed for the Centro de Cultura, Arte y Tradiciones de Oriente (CACTO) at UNIMINUTO, aimed at promoting art, culture, and traditions through digital platforms. The project consists of two main components:





CMS-Centro-de-Arte-Cultura-Y-Tradicion-de-Oriente: A Content Management System (CMS) to manage cultural and artistic content, events, and resources.



UI_Project: A user interface (UI) providing an interactive front-end for users to explore CACTO's cultural offerings.

This project is hosted on GitHub at sasamile/UNIMINUTO-CACTO.

Table of Contents





Features



Technologies Used



Project Structure



Installation



Usage



Contributing



License



Contact

Features

CMS Component





Content Management: Create, update, and delete articles, events, and media related to cultural activities.



User Authentication: Secure login for administrators to manage content.



Database Integration: Stores content in a structured database for efficient retrieval.



API Endpoints: Provides RESTful APIs for interaction with the UI component.

UI Component





Responsive Design: User-friendly interface adaptable to desktop and mobile devices.



Cultural Showcase: Displays events, galleries, and cultural information dynamically.



Interactive Elements: Includes forms, navigation menus, and media galleries for enhanced user engagement.



Integration with CMS: Fetches content from the CMS via API calls.

Technologies Used





CMS:





Backend: [e.g., Node.js, Express, PHP, or specify the framework used]



Database: [e.g., MySQL, MongoDB, or specify the database]



Authentication: [e.g., JWT, OAuth, or specify the method]



APIs: RESTful API



UI:





Frontend: [e.g., React, Angular, HTML/CSS/JavaScript, or specify the framework]



Styling: [e.g., Bootstrap, Tailwind CSS, or custom CSS]



API Client: [e.g., Axios, Fetch API]



Other Tools:





Version Control: Git, GitHub



Deployment: [e.g., Heroku, Netlify, or specify the platform, if applicable]

Project Structure

UNIMINUTO-CACTO/
├── CMS-Centro-de-Arte-Cultura-Y-Tradicion-de-Oriente/
│   ├── [e.g., src/]          # Source code for the CMS backend
│   ├── [e.g., config/]       # Configuration files (e.g., database, environment)
│   ├── [e.g., routes/]       # API route definitions
│   ├── [e.g., models/]       # Database models
│   └── README.md             # CMS-specific documentation (if separate)
├── UI_Project/
│   ├── [e.g., src/]          # Source code for the UI frontend
│   ├── [e.g., public/]       # Static assets (e.g., images, fonts)
│   ├── [e.g., components/]   # Reusable UI components
│   └── README.md             # UI-specific documentation (if separate)
└── README.md                 # Main project documentation (this file)

Note: Update the folder names and structure based on the actual repository contents.

Installation

Prerequisites





Node.js (if using Node-based CMS or UI)



[Database, e.g., MySQL/MongoDB] (specify version and setup requirements)



Git



[Any other dependencies, e.g., Python, PHP]

CMS Setup





Clone the repository:

git clone https://github.com/sasamile/UNIMINUTO-CACTO.git
cd UNIMINUTO-CACTO/CMS-Centro-de-Arte-Cultura-Y-Tradicion-de-Oriente



Install dependencies:

npm install  # or specify the package manager, e.g., composer, pip



Configure environment variables:





Copy .env.example to .env and update with your database credentials and other settings.

cp .env.example .env



Set up the database:





Run migrations or import the provided SQL file (specify commands).

[e.g., npm run migrate]



Start the CMS server:

npm start  # or specify the command

UI Setup





Navigate to the UI directory:

cd UNIMINUTO-CACTO/UI_Project



Install dependencies:

npm install  # or specify the package manager



Configure API endpoints:





Update the API base URL in [e.g., src/config.js] to point to the CMS server.



Start the development server:

npm start  # or specify the command

Usage

CMS





Access the admin panel at [e.g., http://localhost:3000/admin] (specify URL).



Log in with admin credentials (set up during installation).



Use the dashboard to manage content, such as adding events or uploading media.

UI





Open the UI at [e.g., http://localhost:4200] (specify URL).



Browse cultural events, view galleries, or interact with forms.



Ensure the CMS server is running to fetch dynamic content.

Contributing

Contributions are welcome! To contribute:





Fork the repository.



Create a new branch (git checkout -b feature/your-feature).



Make changes and commit (git commit -m "Add your feature").



Push to your branch (git push origin feature/your-feature).



Open a Pull Request on GitHub.

Please follow the code of conduct and ensure your code adheres to the project's coding standards.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For inquiries, contact:





Maintainer: [Your Name, e.g., sasamile]



Email: [Your Email, e.g., sasamile@example.com]



GitHub Issues: [https://github.com/sasamile/UNIMINUTO-CACTO/issues]



Developed as part of UNIMINUTO's Centro de Cultura, Arte y Tradiciones de Oriente initiative.
