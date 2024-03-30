const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

// whenever the password is changed 
// .pre means before saving hash the pass 
userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
        const salt = await bcrypt.genSalt(10)
        user.password= await bcrypt.hash(user.password,salt);
    }
    next();
})


const User = mongoose.model("User",userSchema);

module.exports = User;