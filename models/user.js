'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      // User.hasMany(models.Tweet)
      // User.hasMany(models.Reply)
      // // User.hasMany(models.Like)
      // User.belongsToMany(User, {
      //   through: models.Followship,
      //   foreignKey: 'followerId',
      //   as: 'Followings'
      // })
      // User.belongsToMany(User, {
      //   through: models.Followship,
      //   foreignKey: 'followingId',
      //   as: 'Followers'
      // })
      // User.belongsToMany(models.Tweet, {
      //   through: models.Like,
      //   foreignKey: 'UserId',
      //   as: 'LikedTweets'
      // })
    }
  };
  User.init({
    account: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true
  })
  return User
}