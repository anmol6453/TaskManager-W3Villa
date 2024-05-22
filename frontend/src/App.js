import Header from './components/header/Header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import EditTask from './components/taskmanager/EditTask';
import RequireAuth from './utils/RequireAuth';
import { useSelector } from 'react-redux';

function App() {
	const { auth } = useSelector((state) => ({ ...state }));
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/signin'
						element={!auth.currentUser ? <Signin /> : <TaskManager />}
					/>
					<Route
						path='/signup'
						element={!auth.currentUser ? <Signup /> : <TaskManager />}
					/>
					<Route
						path='/taskmanager'
						element={
							<RequireAuth>
								<TaskManager />
							</RequireAuth>
						}
					/>
					<Route
						path='/edit'
						element={
							<RequireAuth>
								<EditTask />
							</RequireAuth>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
