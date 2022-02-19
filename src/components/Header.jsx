import "./../App.css";
import logo from './../images/pngwing.png';

const Header = () => {
	return (
		<header className="header">
			<img className="header-logo" src={logo} alt="logo"></img>
		</header>
	)
}

export default Header;