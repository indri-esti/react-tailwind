import { Routes, Route } from "react-router-dom";
import Login from "./assets/auth/Login";
import Register from "./assets/auth/Register";
import Dashboard from "./Component/Dashboard";
import Editdata from "./Pages/Editdata";
import Input from "./Pages/input";
import Tambahdata from "./Pages/Tambahdata";
import LandingPage from "./Component/landingpage";
import Profile from "./Component/Profile";
import Sidnav from "./Component/Sidnav";
import TabelData from "./Pages/Tabeldata";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sidnav" element={<Sidnav />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/editdata" element={<Editdata />} />
      <Route path="/input" element={<Input />} />
      <Route path="/tabeldata" element={<TabelData />} />
      <Route path="/tambahdata" element={<Tambahdata />} />
    </Routes>
  );
}

export default App;
