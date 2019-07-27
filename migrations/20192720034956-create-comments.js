'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('news_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.STRING
      },
      newsId: {
        type: Sequelize.INTEGER, 
        field: "news_id",
      },
      objectId: {
        type: Sequelize.INTEGER, 
        field: "object_id",
      },
      objectType: { 
        type: Sequelize.STRING, 
        field: "object_type" ,
      },
      username: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "created_at" ,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: "updated_at" ,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('news_comments_test');
  }
};
