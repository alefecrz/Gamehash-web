const User = require('../models/User');

module.exports = {
  async index(req, res){
    const users = await User.find({});
    
    return res.status(200).json(users);
  },
  async store(req, res) {
    const { filename } = req.file;
    //TODO aplicar jwt
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if(user)
      return res.status(400).json({ error: 'User already exits.'});

    if(!user)
      user = await User.create({
        profile: filename,
        name,
        email,
        password,
      });

    return res.json(user);
  },
  async show(req, res){
    const { _id } = req.params;

    let user = await User.findById({ _id });

    if(!user)
      return res.status(400).json({ error: 'User does not exist.'});
    else
      return res.json(user);
  },
  async destroy(req, res){
    const { _id } = req.params;

    let user = await User.findById({ _id });
    
    if(!user)
      return res.status(400).json({ error: 'User does not exist.'});
    await User.deleteOne({ _id });

    return res.json({ success: 'User removed.'});

  }
}