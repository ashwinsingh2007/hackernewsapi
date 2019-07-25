const Users = require("../models").Users;

module.exports = {
  create(req, res) {
    const {username, password} = req.body;
    console.log('-----',req.body);
    return Users.create({
      username,
      password,
    })
      .then(() => {
        res.status(200).send({username});
      })
      .catch(e => console.log(e));
  },
  validate(req, res) {
    const {username, password} = req.body;
    console.log('-----',req.body);
    return Users.create({
      username,
      password,
    })
      .then(() => {
        res.status(200).send("ok");
      })
      .catch(e => console.log(e));
  }
};
