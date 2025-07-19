import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import PrivateRoute from "./components/base/PrivateRoute"; // ou onde você salvar
import SignUp from "./routes/login/SingUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
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
