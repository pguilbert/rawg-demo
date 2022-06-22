import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { GameList } from "./components/GameListPage/GameList";
import { MainLayout } from "./components/Layout/MainLayout";
import { GameListPage } from "./components/GameListPage/GameListPage";
import { SWRConfig } from "swr";

const App = () => {
  return (
    <SWRConfig
      value={{
        // Prevent to much api calls.
        // always prefers cached data
        errorRetryCount: 1,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<GameListPage />} />
              <Route path="games/:id" element={<GameDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </SWRConfig>
  );
};

export default App;
