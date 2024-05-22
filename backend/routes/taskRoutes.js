import express from 'express'
import { addTask, deleteTask, getAllTasks, updateTask, statusChange } from '../controllers/taskController.js';
const router = express.Router();


// router.route('/').post(addTask);
// router.route('/').get(getAllTasks);
// router.route('/').put(updateTask);
// router.route('/').delete(deleteTask);

router.route('/add').post(addTask);
router.route('/tasks').get(getAllTasks);
router.route('/edit/:id').put(updateTask);

router
	.route('/:id')
	.put(statusChange)
	.delete(deleteTask);

export default router