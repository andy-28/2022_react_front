import React from 'react';
import './App.css';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './page/home'
import Detail from './page/article';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/detail/:id',
    element: <Detail/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

      
