import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';
import Test from './pages/Test';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
 { path: '/', element: <App/>},
 {path: '/test', element: <Test/>},
 // Add more routes as needed
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);