 <h1>Article Extractor and Summarizer</h1

This is a simple web application that allows you to extract and summarize articles from the web. It uses the Article Extractor and Summarizer API from RapidAPI to fetch article summaries.

<h1>Technologies Used </h1>
React.js
Redux Toolkit
Tailwind CSS
Article Extractor and Summarizer API from RapidAPI

<h1>Features</h1>
Users can extract and summarize articles by providing the article URL.
The summary will be displayed on the same page.
The application stores previously summarized articles in local storage.
Users can copy the article link to the clipboard.
Usage
To use this application, you can either visit the live demo or clone this repository and run the app locally.

<h1> Live Demo</h1>
 <h3>You can visit the live demo here.</h3>

<h1> Local Installation</h1>

<p>Clone the repository:</p>
<li>git clone https://github.com/ngermanishvili/ai-summarizer</li>
<li>cd repo </li>
<li> npm install</li>
<li>Create a .env file at the root of the project with the following content <br /> VITE_RAPID_API_ARTICLE_KEY=your_rapid_api_key_here</li>
<li>npm run dev </li>

<h1>What I Learned</h1>
This project helped me learn more about building React apps with Redux Toolkit and integrating APIs. In particular, I learned how to use the createApi function from Redux Toolkit to create a scalable API client that can be easily integrated into the Redux store. I also learned how to use the useLazyQuery hook from the @reduxjs/toolkit/query/react package to fetch data from the API only when it is needed, and how to handle loading and error states with this hook.

<h4>Overall, this project gave me a good understanding of how to use React, Redux Toolkit, and APIs to build scalable web applications</h4>

This project was created by <h4> Nika Germanishvili.</h4> The application uses the Article Extractor and Summarizer API from RapidAPI. Special thanks to the developers who contributed to the development of the libraries and tools used in this project.
