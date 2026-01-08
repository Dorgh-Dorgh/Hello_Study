import "../App.css";
import { useNavigate, Routes, Route } from "react-router-dom";

import Login from "./login.jsx";
import Signup from "./signup.jsx";

function App() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="header">
        <div className="auth">
          <button className="btn" type="button" onClick={() => navigate("/signup")}>회원가입</button>
          <button className="btn" type="button" onClick={() => navigate("/login")}>로그인</button>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<div>메인 페이지</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
