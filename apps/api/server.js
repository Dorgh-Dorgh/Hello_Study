const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;
const authRouter = require('./routes/auth');

// 미들웨어
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter)

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});