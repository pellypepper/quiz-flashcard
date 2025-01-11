# Quiz Application

This is a React-based quiz application that allows users to create quizzes, add flashcards, and take quizzes on various topics. The application is built using React, Bootstrap, and Redux Toolkit for state management. It also employs UUID for generating unique identifiers for quizzes and cards.

## Features

- **Create Quizzes**: Users can create new quizzes by providing a title and selecting a topic.
- **Add Flashcards**: Each quiz can contain multiple flashcards with front and back text.
- **Display Cards**: Users can flip cards to see the front and back text during quizzes.
- **Manage Topics**: Admins can create topics that quizzes can be associated with.
- **Persistent State**: Uses Redux Toolkit to manage the application state, including quizzes and cards.
- **User-Friendly Interface**: Built with Bootstrap for a responsive design.

## Technologies Used

- **Frontend**: 
  - React
  - Bootstrap
  - Redux Toolkit
  - UUID
- **State Management**: Redux Toolkit
- **Routing**: React Router

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/science-quizzes.git
   cd science-quizzes
2. Install dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn install
Start the development server:

bash
Copy code
npm start
or

bash
Copy code
yarn start
Open your browser and go to http://localhost:3000 to see the application in action.

Usage
To create a new quiz, navigate to the "Create Quiz" section.
Enter a title for the quiz and select a topic.
Add flashcards by filling in the front and back text for each card.
Click on the "Create Quiz" button to save your quiz.
You can view and take your quizzes from the main page.
Admin Features
Admins can create new topics that can be linked to quizzes.
The admin dashboard allows management of quizzes and topics.
Contributing
Fork the repository

Create a new branch for your feature:

bash
Copy code
git checkout -b feature-name
Make your changes and commit them:

bash
Copy code
git commit -m 'Add some feature'
Push to the branch:

bash
Copy code
git push origin feature-name
Create a new Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
React
Redux Toolkit
Bootstrap
