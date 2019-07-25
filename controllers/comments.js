const Comments = require("../models").Comments;
const News = require("../models").News;

module.exports = {
  create(req, res) {
    const {comments, newsId, objectId, users} = req.body;
    console.log('-----',req.body, 'reply-', objectId);
    return Comments.create({
      comments,
      newsId,
      objectId,
      username: users.username,
      objectType: "news"
    })
      .then(() => {
        res.status(200).send("ok");
      })
      .catch(e => console.log(e));
  }
};
