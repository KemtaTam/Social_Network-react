import s from "./Sidebar.module.css"

const Sidebar = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.ul}>
				<li className={s.li}><a href="/">Profile</a></li>
				<li className={s.li}><a href="/">Message</a></li>
				<li className={s.li}><a href="/">News</a></li>
				<li className={s.li}><a href="/">Music</a></li>
				<li className={s.li}><a href="/">Settings</a></li>
			</ul>
		</nav>
		
	)
}

export default Sidebar;