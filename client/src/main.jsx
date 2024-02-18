import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Tasks from './components/Tasks.jsx';
import { TasksContextProvider } from './components/TaskContext.jsx';
import TaskForm from './components/TaskForm.jsx';
import HomePage from './pages/HomePage.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 30,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 25,
    }
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <HomePage /> },
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
    <ThemeProvider theme={theme}>
      <TasksContextProvider>
        <RouterProvider router={router} />
      </TasksContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
