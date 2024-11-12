import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import GlobalThemeProvider from './context/GlobalThemeProvider.jsx'
import { Theme } from '@chakra-ui/react'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <Home />,
    },
  ],

},
{
  path: 'login',
  element: <Theme><Login /></Theme>,
},
{
  path: 'register',
  element: <Theme><Register /></Theme>,
}
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider><GlobalThemeProvider><RouterProvider router={router} /></GlobalThemeProvider></Provider>
  </StrictMode>,
)
