import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Tasks from './pages/Tasks.jsx';
import { TasksContextProvider } from './components/TaskContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/new",
        element: <>CREATE TASK</>,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksContextProvider>
    <RouterProvider router={router} />
    </TasksContextProvider>
  </React.StrictMode>,
)
