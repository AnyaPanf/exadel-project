import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from './routes/Header.tsx';
import { Upload } from './routes/Upload.tsx';
import { Files } from './routes/Files.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "files",
        element: <Files />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
