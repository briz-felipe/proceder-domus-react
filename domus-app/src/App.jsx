import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
