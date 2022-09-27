import "./Home.scss";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import Navbar from '../../Components/navbar/Navbar.jsx';
import Widget from '../../Components/widgets/Widget.jsx';
import Feature from '../../Components/feature/Feature.jsx';
import Chart from '../../Components/chart/Chart.jsx';
import List from '../../Components/table/Table.jsx';

const Home = () => {
	return (
		<div className="home">
			<Sidebar/>
			<div className="homeContainer">
				<Navbar/>
				<div className="widgets">
					<Widget type="user"/>
					<Widget type="order"/>
					<Widget type="earning"/>
					<Widget type="balance"/>
				</div>
				<div className="charts">
					<Feature/>
					<Chart/>
				</div>
				<div className="list-container">
					<div className="list-title">Lastest Transactions</div>
					<List/>
				</div>
			</div>
		</div>
	)
}

export default Home;
