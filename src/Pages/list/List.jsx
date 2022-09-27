import React from 'react';
import './List.scss';
import Sidebar from '../../Components/sidebar/Sidebar.jsx';
import Navbar from '../../Components/navbar/Navbar.jsx';
import Datatable from '../../Components/datatable/Datatable.jsx';

const List = () => {
	return (
		<div className="list">
			<Sidebar/>
			<div className="list-container">
				<Navbar/>
				<Datatable/>
			</div>
		</div>
	)
}

export default List;
