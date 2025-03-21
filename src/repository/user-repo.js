const { Model } = require('sequelize');
const { User } = require('../models/index');
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
}


module.exports = userrepo;