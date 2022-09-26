import React from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CategoryIcon from '@mui/icons-material/Category';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Marn Htet Zan</span>
			</div>
			<hr/>
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li><DashboardIcon className="icon"/><span>Dashboard</span></li>
					<p className="title">LISTS</p>
					<li><PersonOutlineOutlinedIcon className="icon"/><span>Users</span></li>
					<li><InventoryIcon className="icon"/><span>Products</span></li>
					<li><CategoryIcon className="icon"/><span>Orders</span></li>
					<li><LocalShippingIcon className="icon"/><span>Deliver</span></li>
					<p className="title">USEFUL</p>
					<li><BarChartIcon className="icon"/><span>Stats</span></li>
					<li><NotificationsActiveIcon className="icon"/><span>Notifications</span></li>
					<p className="title">SERVICES</p>
					<li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
					<li><LoginIcon className="icon"/><span>Logs</span></li>
					<li><SettingsIcon className="icon"/><span>Settings</span></li>
					<p className="title">USER</p>
					<li><AccountCircleIcon className="icon"/><span>Profile</span></li>
					<li><LogoutIcon className="icon"/><span>Logout</span></li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOptions"></div>
				<div className="colorOptions"></div>
			</div>
		</div>
	)
}

export default Sidebar;
