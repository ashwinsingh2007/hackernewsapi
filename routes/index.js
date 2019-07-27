var express = require('express');
var router = express.Router();

const commentsController = require('../controllers').comments;
const newsController = require('../controllers').news;
const usersController = require('../controllers').users;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.json({test: 'ok'})
});

router.get('/api/news', newsController.list);
router.get('/api/news/:id', newsController.getById);
router.post('/api/comments/:id', commentsController.create);
router.post('/api/comments/edit/:id', commentsController.update);
router.post('/api/news', newsController.create);
router.post('/api/users/signup', usersController.create);
router.post('/api/users/login', usersController.validate);

module.exports = router;
