![Screenshot (363)](https://github.com/himansu-1/mca-final/assets/118210276/a21d7baa-c14e-41e1-aa72-d376affdc6c4)# BUMCA Alumni Gathering Web Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction
The BUMCA Alumni Gathering Web Application is designed to facilitate engagement, networking, and resource sharing among the alumni, staff, and administration of Berhampur University's MCA program. This platform offers a range of features to support the alumni community, including user authentication, profile management, content creation, media sharing, commenting, and search functionality.

## Features
- **User Authentication**: Secure login and registration for alumni, staff, and admin.
- **Profile Management**: Update and manage personal profiles, including contact information, social links, and bio.
- **Content Creation**: Post updates, share job vacancies, and announce gatherings.
- **Media Sharing**: Upload and share images, videos, and documents.
- **Commenting**: Engage with posts through comments.
- **Search Functionality**: Search for alumni by name, passing year, or other criteria.
- **Admin Controls**: Manage users, posts, and carousel images; delete irrelevant content.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Development Tools**: Visual Studio Code, Git, GitHub
- **Other Technologies**: HTML, CSS, JavaScript

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/BUMCA-Alumni-Gathering.git
   cd BUMCA-Alumni-Gathering
2. **Install frontend dependencies:**

    ```bash
    Copy code
    cd client
    npm install
    cd ..
3. **Install backend dependencies:**

    ```bash
    Copy code
    cd server
    npm install
    cd ..
4. **Set up environment variables:**
Create a .env file in the server directory with the following contents:

      ```env
      Copy code
      MONGODB_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
5. **Run the application:**

**Start the backend server:**
      ```bash
      Copy code
      cd server
      npm start
**Start the frontend development server:**
      ```bash
      Copy code
      cd client
      npm start
6. **Open your browser and navigate to:**
      
      ```arduino
      Copy code
      http://localhost:3000


**Usage**
Register an account as an alumni, staff, or admin.
Log in to access your dashboard.
Update your profile with personal information, social links, and bio.
Create and share posts about job vacancies, gatherings, and other updates.
Upload and share media files in the media section.
Search for alumni by name, passing year, or other criteria.
Admin users can manage content and users through the admin dashboard.
## Screenshots

## Login Page
![Screenshot (370)](https://github.com/himansu-1/mca-final/assets/118210276/a659e958-0b3d-4c2e-b2ae-7979e3e1f8a3)
![Screenshot (371)](https://github.com/himansu-1/mca-final/assets/118210276/5c93b9c5-fcc5-4e96-8038-6214bb1901d7)

## Alumni Dashboard
![Screenshot (366)](https://github.com/himansu-1/mca-final/assets/118210276/76a69094-1203-4b0b-bdac-a0ad5ac38c81)

## Profile Pages of Alumni
![Screenshot (369)](https://github.com/himansu-1/mca-final/assets/118210276/6b4772ec-5d3a-4336-b435-6b3d94d85124)

## Profile Edit Pages
![Screenshot (369)](https://github.com/himansu-1/mca-final/assets/118210276/6b4772ec-5d3a-4336-b435-6b3d94d85124)

## Admin Button after Login of Admin
![Screenshot (372)](https://github.com/himansu-1/mca-final/assets/118210276/f26f27c6-945c-45b8-844a-46c2444a3dbd)

## Admin Page
![Screenshot (373)](https://github.com/himansu-1/mca-final/assets/118210276/28687eb7-9353-47af-8497-c7ddeedfaff9)

## Home Page
![Screenshot (364)](https://github.com/himansu-1/mca-final/assets/118210276/5c2a0be8-e010-49cc-ba87-241ae6f4921d)

## Media Section
![Screenshot (368)](https://github.com/himansu-1/mca-final/assets/118210276/b68a6f11-c595-49cf-af59-71be1d8bd2dc)


## Contributing
Contributions are welcome! Please read the CONTRIBUTING.md file for guidelines on how to contribute to this project.


## Acknowledgments
We would like to thank the faculty and administration of Berhampur University, our team members, the alumni community, and the authors of the resources we used. Your support, feedback, and dedication were instrumental in bringing this project to life.


### Notes:
- **Screenshots**: Ensure you have relevant screenshots saved in a `screenshots` directory within your project. Update the image paths accordingly.
- **Environment Variables**: Replace `your_mongodb_uri` and `your_jwt_secret` with your actual MongoDB URI and JWT secret.
- **GitHub Repository URL**: Replace `https://github.com/yourusername/BUMCA-Alumni-Gathering.git` with the actual URL of your GitHub repository.
- **Contributing Guidelines**: Create a `CONTRIBUTING.md` file with guidelines on how others can contribute to your project.
- **License**: Ensure the `LICENSE` file is included in your project root with the appropriate license text.

This `README.md` file provides a comprehensive overview of your project, including setup instructions, usage details, and contribution guidelines, making it easier for others to understand and contribute to your project.
