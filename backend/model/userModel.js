import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

userSchema.pre('save', function(next){
    let user=this
    if(user.isModified('password')){
        return bcrypt.hash(user.password, 12, function (err, hash) {
			if (err) {
				return next(err);
			}
			user.password = hash;
			return next();
		});
	} else {
		return next();
	}
    
})


userSchema.methods.comparePassword = function (password, next) {
	bcrypt.compare(password, this.password, function (err, match) {
		if (err) {
			return next(err, false);
		}
		return next(null, match);
	});
};


const User=mongoose.model('User',userSchema)
export default User