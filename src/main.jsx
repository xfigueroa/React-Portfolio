
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { SkillsPage } from './pages/Skills.jsx';
import { HomePage } from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { ProjectsPage } from './pages/Projects.jsx';
import { ContactPage } from './pages/Contact.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />, 
      errorElement: <ErrorPage />,     
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/pages/Skills',
          element: <SkillsPage />,
        },
        {
          path: '/pages/Projects',
          element: <ProjectsPage />,
        },
        {
          path: '/pages/Contact',
          element: <ContactPage />,
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render( 
    <RouterProvider router={router} />
);
