const  userrepo  = require('../repository/user-repo');
const { AUTH } = require('../config/server-config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

    async signin(obj){
        try {
            const user = await this.repository.getbyEmail(obj.email);
            const response = this.passwordvalidation(obj.password,user.password);

            if(!response){
                console.log('Password is Incorect');
                throw(err);
            }

            const token = this.createtoken(user.email,user.id);
            return token;

        } catch (error) {
            console.log('Something went wrong in Signin process'+err);
            throw(err);
        }
    }

    async isAuthenticated(token){
        try{
            const response = this.verifytoken(token);
            if(!response){
                throw('Token is expire or Error');
            }
            const user  = await this.repository.getbyid(response.id);
            if(!user){
                throw('USer delete');
            }

            return response.id;
        }
        catch(err){
            console.log('Something went wrong in isAuthenticated process'+err);
            throw(err);
        }
    }

    createtoken(useremail,userId){
        try {
            const token = jwt.sign({
                email: useremail,
                id : userId
            }, AUTH, { expiresIn: '7 days' });
            return token;
        } catch (error) {
            console.log('Something went wrong in token creation'+err);
            throw(err);
        }
    }

    verifytoken(token){
        try{
            const response = jwt.verify(token, AUTH);
            return response;
        }
        catch(error){
            console.log('Something went wrong in token validation',error);
            throw(err);
        }
    }

    passwordvalidation(incomingpassword,encryptedpassword){
        try {
            return bcrypt.compareSync(incomingpassword,encryptedpassword);
            
        } catch (error) {
            console.log('Something went wrong in password validation',error);
            throw(err);
        }
    }

    async isAdmin(userid){
        try {
            return await this.repository.isAdmin(userid);
        } catch (error) {
            console.log('Something went wrong in isAdmin service',error);
            throw(error);
        }
    }
}

module.exports = Userservice;