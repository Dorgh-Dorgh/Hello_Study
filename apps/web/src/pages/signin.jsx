function Signin() {
  return (
    <div>
      <h2>로그인</h2>

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

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
