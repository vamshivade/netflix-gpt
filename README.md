# NetflixGPT

NetflixGPT is a React-based movie recommendation app inspired by Netflix. It gives users a modern login/signup experience, protects private routes, and shows movie content fetched from the TMDB API with Firebase authentication for accounts.

## What this application does

- User sign-up and sign-in using Firebase Authentication
- Protected dashboard route for authenticated users
- Public login page for guest users
- Fetch trending and now-playing movies from TMDB
- Display a featured movie and movie poster cards
- Show movie trailer/video details for the featured movie
- Sign out from the header with a clean Netflix-style UI
- Route guards to redirect users based on auth state

## Tech stack

- React
- React Router DOM
- Redux Toolkit
- Firebase Authentication
- TMDB API
- React Hot Toast
- Create React App

## Project structure

```bash
src/
  api/
    apiConfig.js
    apiHandler.js
    endpoints.js
    moviesApi.js
  components/
    common/
    header/
    movie/
  hooks/
    useFetchMovies.js
    useFetchMovieVideo.js
  pages/
    Dashboard/
    Login/
  redux/
    appStore.js
    moviesSlice.js
    userSlice.js
  routes/
    appRouter.js
    ProtectedRoutes.js
    PublicRoute.js
  utils/
    constants.js
    firebase.js
    uiComponents.js
```

## How the app is built

The app is built in a layered way so each concern is separated:

1. Firebase handles authentication
2. Redux stores the current user and movie data
3. TMDB API provides movie information
4. React Router controls public vs protected pages
5. Dashboard fetches data on load and displays UI components

## Step-by-step implementation flow

### 1. App startup

The app boots from the main entry file and wraps the application in Redux and React Router.

- src/index.js provides the Redux store and router bootstrapping
- src/App.js listens to Firebase auth state changes
- Redux user slice stores the logged-in user and loading state

### 2. Firebase auth setup

Authentication is initialized in src/utils/firebase.js.

This file creates the Firebase app and exports the auth instance. The app uses:

- createUserWithEmailAndPassword
- signInWithEmailAndPassword
- updateProfile
- signOut

The login page is implemented in src/pages/Login/Login.js.

### 3. Login and signup flow

When the user signs in or signs up:

- form validation runs
- Firebase auth request is executed
- user data is saved in Redux
- app redirects to /dashboard
- toast notification is shown

If login fails, the app catches Firebase error codes and shows user-friendly messages.

### 4. Route protection

The router is configured in src/routes/appRouter.js.

The route structure is:

- Public routes: /, /login
- Protected route: /dashboard

The auth guards are:

- src/routes/PublicRoute.js
- src/routes/ProtectedRoutes.js

These components check Redux auth state before allowing access:

- if user is authenticated and tries to visit public page -> redirect to /dashboard
- if user is not authenticated and tries to visit protected page -> redirect to /

The Outlet is used here to render the child routes only when the access check passes.

### 5. Movie data fetching

The API layer is defined in:

- src/api/apiConfig.js
- src/api/endpoints.js
- src/api/moviesApi.js

The hook src/hooks/useFetchMovies.js fetches:

- trending movies
- now playing movies

It dispatches the results to the movies slice.

### 6. Dashboard flow

The dashboard page is in src/pages/Dashboard/Dashboard.js.

When the dashboard loads:

- useFetchMovies() runs
- trending and now playing data is requested
- loading state is shown if needed
- data is stored in Redux
- UI sections render movie cards and hero movie content

### 7. Featured movie and trailer logic

The movie screen is broken into components:

- src/components/movie/MainContainerOne.js
- src/components/movie/MainContainerTwo.js
- src/components/movie/VideoTrailer.js
- src/components/movie/MovieCard.js

A featured movie is selected from trending results. Its trailer is fetched using the hook in src/hooks/useFetchMovieVideo.js.

This allows the app to display:

- featured movie banner/title
- trailer or video preview
- poster grid of movie cards

### 8. Sign out flow

The header is in src/components/header/Header.js.

When the user clicks Sign out:

- Firebase sign-out is called
- Redux user state is cleared
- user is redirected to the login page

## Build and run steps

### Prerequisites

Make sure you have:

- Node.js installed
- npm or yarn installed
- Firebase project created
- TMDB API access configured

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a .env file in the project root with the following values:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_TMDB_URL=https://api.themoviedb.org/3
REACT_APP_TMDB_TOKEN=your_tmdb_bearer_token
```

### 3. Start development server

```bash
npm start
```

The app runs in development mode on:

```bash
http://localhost:3000
```

### 4. Production build

```bash
npm run build
```

This creates a production build in the build folder.

## Typical user flow

1. User opens the app
2. If not logged in, they see the login screen
3. User signs in or creates an account
4. Firebase verifies auth
5. User is redirected to the dashboard
6. Dashboard fetches movie data from TMDB
7. App displays promoted movie and movie lists
8. User can sign out anytime from the header

## Notes

This app is a clean example of combining:

- authentication
- route guards
- Redux state management
- API fetching
- lazy route loading concepts
- modern React UI patterns

It is a good project to understand how a real-world movie app is structured from authentication to dashboard content.

## Future improvements

Possible enhancements include:

- search movies by name
- movie detail page
- favorites/watchlist feature
- profile page
- multi-language support
- improved trailer modal experience
- user-specific recommendations

---

If you want, I can also turn this into a more polished README with screenshots, badges, and a deployment section for Firebase or Vercel.
