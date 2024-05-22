import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editItem } from '../../redux/taskSlice';
import history from '../../history';
import './addtask.scss';

const EditTask = () => {
	const {id} = useParams();
	const tasks = useSelector((state) => state.task);
	const { AllTasks } = tasks;
	const dispatch = useDispatch()
	
	console.log(AllTasks)

	const taskKey = Object.keys(AllTasks).filter(task => task._id === id);
	const task = AllTasks[taskKey]
	const [newTask, setNewTask] = useState(task.task);
	
	console.log(task)
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(editItem(task._id, newTask));
		history.push('/taskmanager')
	}
  return (
		<div>
			<div className='addtask'>
				<form onSubmit={handleSubmit}>
					<input 
						type='text'
						value={newTask}
						onChange={e => setNewTask(e.target.value)}
					/>
					<button type="submit" className='button'>
						Edit
					</button>
				</form>
			</div>
		</div>
  )
}

export default EditTask
