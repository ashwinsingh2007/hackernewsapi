"use strict";

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      comments: DataTypes.STRING,
      newsId: { type: DataTypes.INTEGER, field: "news_id" },
      objectId: { type: DataTypes.INTEGER, field: "object_id" },
      objectType: { type: DataTypes.STRING, field: "object_type" },
      username: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, field: "created_at" },
      updatedAt: { type: DataTypes.DATE, field: "updated_at" }
    },
    { tableName: "news_comments4" }
  );

  // Classroom.associate = function(models) {
  //   Classroom.hasMany(models.Student, {
  //     foreignKey: 'classroom_id',
  //     as: 'students',
  //   });
  // };

  return Comments;
};
