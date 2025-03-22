'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role,{
        through:'User_Roles'
      })
    }
  }
  User.init({
    email: {type:DataTypes.STRING,allowNull:false,unique:true},
    password: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user, options) => {
    const SALT = await bcrypt.genSalt(10);         
    const hash = await bcrypt.hash(user.password, SALT); 
    user.password = hash  
});
  return User;
};