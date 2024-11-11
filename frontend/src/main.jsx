import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <Home />,
    },
  ],
}]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider><RouterProvider router={router} /></Provider>
  </StrictMode>,
)
