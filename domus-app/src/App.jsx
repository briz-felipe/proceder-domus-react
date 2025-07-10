import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/Home';
import Login from './routes/login/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
