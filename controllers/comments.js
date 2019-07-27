const Comments = require("../models").Comments;
const News = require("../models").News;

module.exports = {
  create(req, res) {
    const { comments, newsId, objectId, users } = req.body;
    console.log("-----", req.body);
    return Comments.create({
      comments,
      newsId,
      objectId,
      username: users,
      objectType: "news"
    })
      .then(() => {
        res.status(200).send("ok");
      })
      .catch(e => console.log(e));
  },

  update(req, res) {
    console.log("req.body--", req.body);
    //req.body-- { objectId: 21, comments: 'ws', users: 'ashwin' }
    const { comments, newsId, objectId, users } = req.body;
    return Comments.update(
      { comments },
      { where: { id: objectId, username: users } }
    )
      .then(() => {
        res.status(200).send("ok");
      })
      .catch(e => console.log(e));
    res.send("ok");
  }
};
