import { Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

function App() {     
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      {/* <Route path="/halaman" element={<LandingPage />}/>
      <Route path="/halaman" element={<LandingPage />}/> */}
    </Routes>
  );
}

export default App;
