import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? s.active : s.item; 

const Sidebar = (props) => {
	return (
		<nav className={s.nav}>
			<ul className={s.ul}>
				<li className={s.li}>
					<NavLink to = "/profile" className ={activeLink}>Profile</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/dialogs" className ={ activeLink}>Message</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/news" className ={ activeLink}>News</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/music" className ={ activeLink}>Music</NavLink>
				</li>
				<li className={s.li}>
					<NavLink to = "/settings" className ={ activeLink}>Settings</NavLink>
				</li>
			</ul>
			<div className={s.hr}></div>
		</nav>
		
	)
}

export default Sidebar;