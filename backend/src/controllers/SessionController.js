const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    //TODO aplicar jwt
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if(!user)
      user = await User.create({
        profile: filename,
        name,
        email,
        password,
      });

    return res.json(user);
  }
}