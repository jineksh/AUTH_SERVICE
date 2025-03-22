const { Model, where } = require('sequelize');
const { User,Role } = require('../models/index');
class userrepo{


    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }
        catch(err){
            console.log('Something went wrong in Repository'+err);
            throw(err);
        }
    }

    async destroy(userId){
        try{
            const user = await User.destroy(userId);
            return user;
        }
        catch(err){
            console.log('Something went wrong in Repository');
            throw(err);
        }

    }

    async getbyid(userId){
        try {
            const user = await User.findByPk(userId);
            return user;
            
        } catch (error) {
            console.log('Something went wrong in fetch user by id'+error);
            throw(error);
        }
    }

    async getbyEmail(useremail){
        try {
            const user = await User.findOne({
                where : {
                    email : useremail
                }
            });
            return user;
            
        } catch (error) {
            console.log('Something went wrong in fetch user by email'+error);
            throw(error);
        }
    }

    async isAdmin(userid){
        try {
            const user = await User.findByPk(userid);
            const adminrole = await Role.findOne({
                where:{
                    name : 'ADMIN'
                }
            });
            const response = await user.hasRole(adminrole);
            return response;
        } catch (error) {
            console.log('Something went wrong in isAdmin'+error);
            throw(error);
        }
    }

}


module.exports = userrepo;