import './Feature.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Feature = () => {
	return (
		<div className="feature">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertIcon fontSize="small"/>
			</div>
			<div className="bottom">
				<div className="feature-chart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$420</p>
				<p className="description">
					Previous transactions processing. Last payment may not be included.
				</p>
				<div className="summary">
					<div className="item">
		            <div className="itemTitle">Last Month</div>
		            <div className="itemResult negative">
		              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
		              <div className="resultAmount">$12.4k</div>
		            </div>
          		</div>
          		<div className="item">
		            <div className="itemTitle">Last Month</div>
		            <div className="itemResult positive">
		              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
		              <div className="resultAmount">$12.4k</div>
		            </div>
          		</div>
          		<div className="item">
		            <div className="itemTitle">Last Month</div>
		            <div className="itemResult positive">
		              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
		              <div className="resultAmount">$12.4k</div>
		            </div>
          		</div>
				</div>
			</div>
		</div>
	)
}

export default Feature;
