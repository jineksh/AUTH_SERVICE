const  userrepo  = require('../repository/user-repo');

class Userservice{

    constructor() {
        this.repository = new userrepo();
    }

    async createuser(data){
        try{
            const user = await this.repository.create(data);
            return user;
        }
        catch(err){
            console.log('Something went wrong in Service layer'+err);
            throw(err);
        }
    }
}

module.exports = Userservice;