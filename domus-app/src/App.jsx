import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Login from './routes/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
