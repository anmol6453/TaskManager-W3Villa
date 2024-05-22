/* eslint-disable react/prop-types */
import './listcard.scss';
import { BiTrash, BiEdit } from 'react-icons/bi';
import {  deleteItem } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ListCard = (items) => {
	const { item } = items;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteItem(item._id));
	};
	const handleEdit = () => {
		navigate('/edit');
	};

	return (
		<div>
			<ul className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`}>
				<li>
					<p>{item._id}</p>
				</li>
				<li>
					<p>{item.task}</p>
				</li>
				<li>
					<p>{item.status}</p>
				</li>
				<li>
					<button onClick={handleEdit}>
						<BiEdit />
					</button>
					<button onClick={handleDelete}>
						<BiTrash />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ListCard;
