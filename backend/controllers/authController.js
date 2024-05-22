import User from "../model/userModel.js";
import jwt from 'jsonwebtoken'

export const login = async(req, res)=>{
    console.log(req.body)
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({ error: 'User not found' })
        }
        user.comparePassword(password, (err, match)=>{
            if(!match || err)
            {
                return res.status(400).json({ error: 'Invalid credentials' });
            }
            const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{
                expiresIn:'24h'
            }) 
            res.status(200).json({
                token,
                name: user.name,
                email: user.email,
                id: user._id,
                createdAt: user.createdAt
            });
        })
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}


export const register = async (req, res)=>{
    console.log(req.body)
    const {name, email, password}=req.body
    try {
        if(!name || !email || !password)
        {
            return res.status(400).json({ error: 'Please enter all fields' });
        }
        const userExist=await User.findOne({email})
        if (userExist) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const user=await new User({
            name,email,password
        })
        await user.save()
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET 
        );
        res.status(200).json({ token, user });
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}