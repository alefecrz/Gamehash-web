const Room = require('../models/Room');
const User = require('../models/User');

module.exports = {
  async index(req, res){
    const rooms = await Room.find({});
    return res.json(rooms);
  },
  async store(req, res){
    //aplicar jwt
    const { name, password } = req.body;
    const { user_id } = req.headers;

    let user = await User.findById(user_id);

    if(!user)
      return res.status(400).json({ error: 'User does not exist! '});

    let room = await Room.findOne({ name });

    if(!room)
      room = await Room.create({
        name,
        password,
        owner: user_id,
      })

    await room.populate('owner').execPopulate();
    return res.json(room);
  }
}