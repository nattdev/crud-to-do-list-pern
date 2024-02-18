import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Tasks from './components/Tasks.jsx';
import { TasksContextProvider } from './components/TaskContext.jsx';
import TaskForm from './components/TaskForm.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
        element: <TaskForm />,
      },
      {
        path: "/edit/:id",
        element: <TaskForm />
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
