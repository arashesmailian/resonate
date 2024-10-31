# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

### Install Dependencies

Ensure you have all the necessary dependencies installed. Run the following command in your project directory:

```sh
npm install
```sh

### Start the Development Server

Start the Vite development server to run your React application. Use the following command:
```sh
npm run dev
```sh

### Access the Application

Open your web browser and navigate to the URL provided by the Vite development server,
typically http://localhost:3004. 

### Build for Production

If you want to build the application for production, run:
```sh
npm run build
```sh


## Project Structure

 - src/: Contains the source code of the application.
 - public/: Contains static assets.
 - vite.config.js: Vite configuration file.

## Technologies Used
 - TypeScript
 - React
 - Vite
 - Axios
 - React-query

## API Integration
The project uses @tanstack/react-query for data fetching and axios for making HTTP requests. The API endpoints are defined in the src/api directory.
Example API Usage

```
import { useUserGet } from 'api/users';

const { data: users, error, isLoading } = useUserGet();

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error loading contacts</div>;
}

return (
  <div>
    {users?.map(user => (
      <div key={user.id}>{user.name}</div>
    ))}
  </div>
);
```