import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index.tsx";
import PostPage from "./pages/PostPage/index.tsx";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
