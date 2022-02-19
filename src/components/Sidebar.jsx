import "./../App.css";

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<ul className="sidebar__ul">
				<li className="sidebar__ul-li"><a href="/">Profile</a></li>
				<li className="sidebar__ul-li"><a href="/">Message</a></li>
				<li className="sidebar__ul-li"><a href="/">News</a></li>
				<li className="sidebar__ul-li"><a href="/">Music</a></li>
				<li className="sidebar__ul-li"><a href="/">Settings</a></li>
			</ul>
		</nav>
	)
}

export default Sidebar;