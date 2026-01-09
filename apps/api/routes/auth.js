const router = require('express').Router();
const bcrypt = require('bcrypt');

// 임시 유저 저장소 (나중에 DB로 교체)
const users = [];

// 서버 확인용
router.get('/', (req, res) => {
  res.send('서버 정상 작동 중!');
});

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { username, password, passwordck } = req.body;
  if(password !== passwordck)
  {
    return res.status(400).json({
      success: false,
      message: "비밀번호가 일치하지 않습니다."
    })
  }

  const exists = users.some(user => user.username === username);

  if(exists)
  {
    return res.status(400).json({
      success: false,
      message: "이미 존재하는 아이디입니다."
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username : username, password : hashedPassword });

  return res.status(201).json({
    success: true,
    message: "회원가입이 성공하였습니다."
  })


   

});

module.exports = router;