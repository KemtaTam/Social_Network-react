import logo from './../../images/pngwing.png';
import h from "./Header.module.css"

const Header = () => {
	return (
		<header className={h.header}>
			<img className={h.header_logo} src={logo} alt="logo" />
		</header>
	)
}

export default Header;