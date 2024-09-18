const UserModel = require("../Modals/user.modal");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const req = require("express/lib/request");
const res = require("express/lib/response");

const Register = async (req, res, next) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        let user = new UserModel({
            name:req.body.name,
            email: req.body.email,
            password: hashedPass,
        });
        const userData = await user.save();
        res.json({
            message: 'user added sucessfully',
            user: userData
        });
    } catch (error) {
        res.json({
            error: error
        })
    }

}

// const sleep = (val) => new Promise((resolve, reject)=>{
//     setTimeout(()=> {console.log('ok'); resolve(true)}, val * 1000);
// })
const Login = async (req, res, next) => {
    try {
        var email = req.body.email
        var password = req.body.password
        const user = await UserModel.findOne({ email })
        if (user) {
            var password = await bcrypt.compare(password, user.password)
            if (password) {
                let token = jwt.sign({ email: user.email,role:user.role }, 'veryscrete', { expiresIn: '1h' })
                res.json({
                    userId: user._id,
                    message: 'login sucessfuly',
                    email: user.email,  // Include email in the response
                    password:user.password,
                    token: token,
                    activity: user.activity
                })
            } else {
                res.json({
                    message: ' user and password does not matched'
                })
            }
        }
    }
    catch (error) {
        res.json({
            error: error
        })
    }

}
//createAdmin

const createAdmin = async (req, res, next) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        let user = new UserModel({
            name:req.body.name,
            email: req.body.email,
            password: hashedPass,
            role:'admin'
        });
        const userData = await user.save();
        res.json({
            message: 'user role added sucessfully',
            user: userData
        });
    } catch (error) {
        res.json({
            error: error
        })
    }

}
const addRevison = async(req, res, next)=>{
    try{
        const {userId, taskId} = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                $addToSet:{
                    activity: taskId
                }
            },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({message: "User not found"});
        }
        res.json(updatedUser);
    }catch(error){
        res.status(400).json({
            error
        });
    }
}
const removeRevison = async(req, res, next)=>{
    try{
        const {userId, taskId} = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                $pull:{
                    activity: taskId
                }
            },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({message: "User not found"});
        }
        res.json(updatedUser);
    }catch(error){
        res.status(400).json({
            error
        });
    }
}

//removeRevision

module.exports={
    Register,Login,createAdmin,addRevison,removeRevison
}
