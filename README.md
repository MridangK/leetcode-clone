# LeetCode Clone


This project is a clone of LeetCode, a popular platform for practicing coding interview questions. It allows users to solve coding problems, write and submit code, and receive instant feedback on whether their test cases pass. The project utilizes Firebase for user authentication and provides a seamless user experience.

## Features

1. Login, Signup, and Register Pages: Users can create an account, log in, and register using the provided pages. Firebase is used for authentication, ensuring secure access to the platform.

2. 10 Coding Problems: The project includes a collection of 10 coding problems for users to solve. These problems cover various algorithms and data structures commonly encountered in coding interviews.

3. Code Submission and Testing: Users can write code solutions for the problems and submit them for testing. The system automatically checks the provided test cases against the code and provides instant feedback on whether the tests pass.

4. Toastify Notifications: When users submit their code, they receive toast notifications indicating whether their code passed the test cases or not. This helps users quickly identify any errors in their solutions.

## Getting Started

To use this repository, follow the steps below:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/leetcode-clone.git
   ```

2. Create a `.env.local` file in the root directory of the project and add the following environment variables:

   ```dotenv
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_APP_ID=
   ```

   Make sure to fill in the values for each variable. These values can be obtained from your Firebase project settings.

3. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

   This will install all the necessary libraries and packages.

4. Start the development server:

   ```bash
   npm run dev
   ```

   The LeetCode Clone application will now be running locally on [http://localhost:3000](http://localhost:3000).

5. Open your preferred web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Dependencies

To run the LeetCode Clone project, the following dependencies are required:

- `toastify`: Used for displaying toast notifications to the user.
- `recoil`: State management library for React applications.
- `react-icons`: A library of icons for React applications.
- `react-router`: Used for managing routing within the application.
- `react-youtube`: React component for embedding YouTube videos.
- `@uiw/react-codemirror`: A React wrapper for the CodeMirror text editor component.
- `@uiw/codemirror-theme-vscode`: A VS Code-inspired theme for CodeMirror.
- `@codemirror/lang-javascript`: CodeMirror language mode for JavaScript.
- `split`: Library for creating resizable split views.

You can install these dependencies using the following command:

```bash
npm install toastify recoil react-icons react-router react-youtube @uiw/react-codemirror @uiw/codemirror-theme-vscode @codemirror/lang-javascript split
```

## Preview

You can access a live preview of the LeetCode Clone project by visiting the following website:

[https://leetcode-clone-nsa7.vercel.app/](https://leetcode-clone-nsa7.vercel.app/)

Feel free to explore the platform, solve coding problems, and test your solutions!

## Contributing

Contributions to the LeetCode Clone project are welcome and encouraged! If you find any issues or have suggestions for improvement, please open an issue on the GitHub repository.
