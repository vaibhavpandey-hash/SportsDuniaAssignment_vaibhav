📘 College Explorer – React Infinite Scroll Table

A responsive and interactive React web application that displays a list of colleges using a modern table layout. The project includes infinite scrolling, sorting, search functionality, and a featured badge for highlighted colleges. College data is served from a dummy JSON dataset (data.js).

This project demonstrates clean React component architecture, reusable UI components, and effective state management for large datasets.

🚀 Features
🔄 Infinite Scroll

Initially loads 10 rows.

Automatically loads more data as the user scrolls to the bottom.

Optimized for performance.

🔍 Search by College Name

Real-time, case-insensitive search.

Filters results across all rendered fields.

↕️ Sorting (Ascending & Descending)

Sort by:

CollegeDunia Rating

Fees

User Review Rating

Each sort button toggles between ascending and descending order.

⭐ Featured Colleges

Colleges with a truthy featured value display a Featured badge.

Highlights premium or top-ranking institutions.

🗂️ Component-Based Architecture

components/ contains:

Table component

Row component

Sort & Search components

Featured badge component

📦 Dummy Data

data.js contains a realistic list of colleges with fields like:

name

fees

cdRating

reviewRating

featured

🛠️ Tech Stack
Technology	Purpose
React.js	Component rendering + UI logic
JavaScript ES6+	App functionality
App.css / index.css	Styling
Vite / React scripts	Bundling & running the project
Images folder	College icons / logos
# To run - 

1.  Installing the neccessary modules using
    # npm install

2.  To run the project
    # npm run dev
