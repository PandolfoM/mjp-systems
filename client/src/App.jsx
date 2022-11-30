import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import ScrollTop from "./components/ScrollTop";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Reset from "./pages/resetForm";
import Dashboard from "./pages/dashboard";
import ClientAccessModal from "./components/ClientAccessModal";
import Auth from "./utils/Auth";

function App() {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const ProtectedRoute = ({ children }) => {
    if (!Auth.loggedIn()) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <ClientAccessModal
        isClientModalOpen={isClientModalOpen}
        setIsClientModalOpen={setIsClientModalOpen}
      />
      <Nav
        isClientModalOpen={isClientModalOpen}
        setIsClientModalOpen={setIsClientModalOpen}
      />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/form" element={<Reset />}></Route>
        <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }></Route>
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
