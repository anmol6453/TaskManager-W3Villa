import User from "../model/userModel.js";
import Task from "../model/taskModel.js";

export const addTask = async (req, res) => {
	const { task, id } = req.body;
	try {
		if (!task) return res.status(400).send('please enter the task');
		if (task.length < 2) return res.status(400).send('add minimum 2 char');
		const taskDetail = await new Task({
			task,
			createdBy: id,
		});
		await taskDetail.save();
		return res.status(200).send(taskDetail);
	} catch (error) {
		return res.status(400).send('task addition failed');
	}
};


export const getAllTasks = async (req, res) => {
	const { id } = req.query;
	try {
		let tasklist = await Task.find({ createdBy: id });
		return res.status(200).send(tasklist);
	} catch (error) {
		return res.status(400).send(error);
	}
};

export const updateTask = async (req, res) => {
	const {id, task} = req.body;
	try{
		if(!id || !task){
			return res.status(400).json({message: 'All fields are required'});
		}

		const note = await Task.findById({ _id: id }).exec();
		if(!note){
			return res.status(400).json({message: 'Task not found'});
		}

		note.task = task;

		const updatedTask = await note.save();

		res.json({message: `${updatedTask.task} updated`});
	}
	catch(error){
		return res.status(400).send('Update Failed');
	}
};

export const statusChange = async (req, res) => {
	const { id, completed } = req.body;
	try {
		if(typeof completed !== 'boolean'){
			return res.status(400).json({message: 'All fields are required'});
		}
		const task = await Task.findById({ _id: id }).exec();
		if(!task){
			return res.status(400).json({message: 'Note not found'});
		}
		task.completed = completed;
		const updatedTask = await task.save();

    	res.json({message: `${updatedTask} updated`});
	} catch (error) {
		return res.status(400).send('Update Failed');
	}
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		let response = await Task.findByIdAndDelete(id);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(400).send('deleteFailed');
	}
};

