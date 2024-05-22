import mongoose from 'mongoose'
const taskSchema=mongoose.Schema({
    task:{
        type: String
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User',
    },
},{
    timestamp:true
})

const Task =mongoose.model('Task',taskSchema)
export default Task