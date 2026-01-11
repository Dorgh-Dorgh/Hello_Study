import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Signup() {
  const navigate = useNavigate();

  //useState를 통해 입력값을 관리하고, 값이 바뀌면 화면에 업데이트하여 출력
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [passwordck, setPasswordck] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    const response = await fetch("http://localhost:3001/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password, passwordck})
    });

    const data = await response.json(); // 응답을 JSON으로 변환
    if(data.success) {
      alert(data.message); //성공 메시지
      navigate("/signin"); //회원가입 성공시 로그인페이지로
    }
    else{
      alert(data.message); //실패 메시지(에러 메시지)
    }
  };
  return (
    <div>
      <h2>회원가입</h2>

      <form onSubmit={handleSubmit}> {/* 폼 제출이 handleSubmit 실행 */}
        <div>
          <label>
            아이디 {/* onChange 함수로 입력할 때마다 변수에 값을 저장 */}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            비밀번호
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            비밀번호 확인
            <input type="password" value={passwordck} onChange={(e) => setPasswordck(e.target.value)} />
          </label>
        </div>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
