import React from 'react';
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext.jsx';

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="navbar">
			<picture>
				<source srcSet="https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png" type="image/avif" />
				<img src="https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png" alt="" loading="lazy"/>
			</picture>
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search...."/>
					<SearchOutlinedIcon className="icon"/>
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlinedIcon className="icon"/>
						English
					</div>
					<div className="item">
						<DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
					</div>
					<div className="item">
						<FullscreenExitOutlinedIcon className="icon"/>
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className="icon"/>
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineOutlinedIcon className="icon"/>
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListOutlinedIcon className="icon"/>
					</div>
					<div className="item">
						<Link to="/users/single" style={{textDecoration:"none", cursor:"pointer"}}>
			            <img
			              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
			              alt="profile"
			              className="avatar"
			            />
						</Link>
          		</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
