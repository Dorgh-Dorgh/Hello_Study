function Signup() {
  return (
    <div>
      <h2>회원가입</h2>

      <form>
        <div>
          <label>
            아이디
            <input type="text" name="username" />
          </label>
        </div>

        <div>
          <label>
            비밀번호
            <input type="password" name="password" />
          </label>
        </div>

        <div>
          <label>
            비밀번호 확인
            <input type="password" name="passwordck" />
          </label>
        </div>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
