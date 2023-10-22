const config = {
  URL: process.env.MODB_URL || 'mongodb+srv://anxiaowai:anxiaowai123@cluster0.dwgdwrg.mongodb.net/?retryWrites=true&w=majority',
  // 加密字符串
  session_secret: 'chuckle',
  token_secret: 'chuckle'
}
module.exports = config;
