Article Extractor and Summarizer

This is a simple web application that allows you to extract and summarize articles from the web. It uses the Article Extractor and Summarizer API from RapidAPI to fetch article summaries.

Technologies Used
React.js
Redux Toolkit
Tailwind CSS
Article Extractor and Summarizer API from RapidAPI

Features
Users can extract and summarize articles by providing the article URL.
The summary will be displayed on the same page.
The application stores previously summarized articles in local storage.
Users can copy the article link to the clipboard.
Usage
To use this application, you can either visit the live demo or clone this repository and run the app locally.

Live Demo
You can visit the live demo here.

Local Installation
Clone the repository:
git clone https://github.com/username/repo.git
cd repo
npm install
Create a .env file at the root of the project with the following content:
VITE_RAPID_API_ARTICLE_KEY=your_rapid_api_key_here
npm run dev

What I Learned
This project helped me learn more about building React apps with Redux Toolkit and integrating APIs. In particular, I learned how to use the createApi function from Redux Toolkit to create a scalable API client that can be easily integrated into the Redux store. I also learned how to use the useLazyQuery hook from the @reduxjs/toolkit/query/react package to fetch data from the API only when it is needed, and how to handle loading and error states with this hook.

Overall, this project gave me a good understanding of how to use React, Redux Toolkit, and APIs to build scalable web applications.

This project was created by Nika Germanishvili. The application uses the Article Extractor and Summarizer API from RapidAPI. Special thanks to the developers who contributed to the development of the libraries and tools used in this project.
