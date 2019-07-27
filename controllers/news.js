const Comments = require("../models").Comments;
const News = require("../models").News;

module.exports = {
  create(req, res) {
    const { title, links, users } = req.body;
    return News.create({
      title,
      links,
      username: users.username,
    })
      .then(() => {
        res.status(200).send("ok");
      })
      .catch(e => console.log(e));
  },

  async list(req, res) {
    let comments = await Comments.findAll({
      attributes: ["id", "newsId"]
    });
    return News.findAll({
      attributes: ["id", "links", "title", "username"],
      order: [["createdAt", "DESC"]]
    })
      .then(news => {
        const formatedNews = news.map(nw => ({
          by: nw.username,
          id: nw.id,
          title: nw.title,
          url: nw.links,
          username: nw.username,
          kids: comments.filter(ct => ct.newsId === nw.id).map(ct => ct.id)
        }));
        res.status(200).send(formatedNews);
      })
      .catch(error => {
        console.log("--error--", error);
        res.status(400).send(error);
      });
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      let news = await News.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          id
        }
      });
      news = news[0];
      const comments = await Comments.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          newsId: id
        }
      });
      let kids = {};
      comments.forEach(ct => {
        kids[ct.id] = {
          id: ct.id,
          username: ct.username,
          mainTread: ct.objectId === null,
          by: ct.username || "Anonymous",
          parent: news.id,
          text: ct.comments,
          type: "comment",
          kids: []
        };
      });
      comments.forEach(ct => {
        if (ct.objectId) {
          kids[ct.objectId].kids.push(kids[ct.id]);
        }
      });
      const formatedKids = [];
      Object.keys(kids).map(key => {
        formatedKids.push(kids[key]);
      });
      const resultantComments = {
        by: news.username || 'Anonymous',
        id: news.id,
        kids: formatedKids.filter(ft => ft.mainTread === true),
        kidsLength: formatedKids.length,
        title: news.title,
        url: news.links,
        username: news.username
      };
      res.status(200).send(resultantComments);
    } catch (e) {
      console.log("---error---", e);
    }
  }
};
