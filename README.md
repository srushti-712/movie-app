# Movie App

## Overview

Thw **Movie App** is a React-based web application that fetches and displays movies. It allows users to favorite their movie and display those on the favorite page.

## Features

- Fetch movies from an API.
- Navigate between **Movies**, **Favorites** pages.
- Handles API errors gracefully.

## Technologies Used

- **React** (Frontend framework)
- **Axios** (HTTP requests)
- **React Router** (Navigation)
- **Context API** (State management)

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/srushti-712/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   Go to the movieDB website : https://www.themoviedb.org/
   Then go to profile > settings > API (left side pane) > fill the form and get your API key.

   ```env
   VITE_APP_API_KEY="<your API key>"
   VITE_APP_BASE_URL="https://api.themoviedb.org/3"
   ```

4. **Run the application**
   ```sh
   npm run dev
   ```

## Folder Structure

```
frontend
├─ .env
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│ └─ vite.svg
├─ src
│ ├─ App.jsx
│ ├─ assets
│ │ └─ react.svg
│ ├─ components
│ │ ├─ MovieCard.jsx
│ │ └─ Navbar.jsx
│ ├─ context
│ │ └─ MovieContext.jsx
│ ├─ main.jsx
│ ├─ pages
│ │ ├─ Favorites.jsx
│ │ └─ Home.jsx
│ ├─ services
│ │ └─ api.js
│ └─ styles
│ ├─ App.css
│ ├─ Favorites.css
│ ├─ Home.css
│ ├─ MovieCard.css
│ ├─ Navbar.css
│ └─ index.css
└─ vite.config.js

```

## Trouble Shooting

The API should work fine once you have your API key, but you can try hitting it from any other Application like postman/curl first.

## Contributing

Feel free to fork and contribute!

## License

[MIT](LICENSE)
