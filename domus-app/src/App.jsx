import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import PrivateRoute from "./components/base/PrivateRoute"; // ou onde você salvar

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
