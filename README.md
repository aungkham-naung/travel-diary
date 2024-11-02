# Travel Diary

## Overview

Travel Diary is a modern single-page application (SPA) designed for travel enthusiasts to record and visualize their travel history seamlessly. Leveraging React and Vite, this app offers an interactive and smooth user experience, allowing users to track their journeys, view locations on an interactive map, and manage their travel logs effortlessly.

The app utilizes a geo-location hook and interactive map powered by the React Leaflet library, providing an engaging way to see your travel history on a real-world map.

## Features

- **Interactive Map with Geo-Location**: Track and visualize your travel history on an interactive map using React Leaflet, giving each journey a vivid geographical context.
- **Single-Page Application (SPA)**: Built with React, the app offers a smooth and responsive user experience by dynamically updating content without reloading the page.
- **Optimized Rendering for Performance**: Implements React optimization techniques like memoization, lazy loading, and code splitting to improve load times, ensuring a faster and smoother user experience.
- **Efficient Data Flow**: Uses React's Context API to manage data across components seamlessly, reducing prop-drilling and making the app more maintainable and scalable.
- **Reusable Components and Custom Hooks**: Designed with modularity in mind, the app’s reusable UI components and custom React hooks make it easy to extend and maintain.
- **Clean and Modern UI**: Responsive, user-friendly design for effortless navigation, enhancing the experience of recording and revisiting past travels.

## Installation Guide

Follow these steps to set up and run the Pizza Menu application locally:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or above)
- **npm** (comes with Node.js) or **Yarn** as the package manager

### Steps

1. **Clone the Repository**:
   Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/aungkham-naung/travel-diary.git
   ```
2. **Navigate to Project Directory**:

   ```bash
   cd travel-diary
   ```

3. **Install Dependency**:
   Install the required dependencies using npm or yarn:

   ```bash
     npm install
   ```

   or

   ```bash
     yarn install
   ```

4. **Run Server**:
   Start the development server with Vite:

   ```bash
     npm run dev
   ```

   or

   ```bash
    yarn dev
   ```

## Technology Stack

- **Front-End**: React with CSS Modules for styling

- **Data Management & Access**: Context API

- **Routing**: React Router

## Project Structure

```plaintext
travel-diary/
│
├── index.html                   # Root HTML file for the app
├── node_modules                 # Installed dependencies (auto-generated)
├── package-lock.json            # Locks dependencies to specific versions
├── package.json                 # Project metadata, scripts, and dependencies
├── README.md                    # Project documentation
├── dist                         # Build output folder for production (auto-generated)
├── data                         # Initial Data for testing
├── vite.config.js               # Configuration file for Vite (build tool)
├── public/                      # Public assets available to the app
|
└── src/                         # Main source code for the application
│   ├── App.jsx                  # Main app component, sets up app routes
│   ├── App.css                  # Main app stylesheet
│   ├── main.jsx                 # Entry point for React, renders the app
│   └── index.css                # Global Stylesheet for the application
│   ├── contexts/                # Context folder for data access/management between components
|        ├----
|
│   ├── hooks/                   # Reusable custom react hooks
|        ├----
|
│   ├── components/              # Reusable UI components
|        ├----
|
│   ├── pages                    # Top-level pages & layout for the application
        ├----
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
