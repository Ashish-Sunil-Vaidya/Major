import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";

import { Theme } from "@chakra-ui/react";
import  useGlobalTheme  from "./hooks/globalTheme";

function App() {
  const { theme } = useGlobalTheme();

  return (
    <Theme appearance={theme}><Layout>
      <Outlet />
    </Layout></Theme>
  )
}

export default App
