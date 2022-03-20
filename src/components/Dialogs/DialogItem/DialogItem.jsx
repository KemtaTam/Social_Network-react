import d from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? d.active : d.item; 

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<li className={d.dialogs_li}>
			<NavLink to={path} className={activeLink}>{props.name}</NavLink>
		</li>
	)
}

export default DialogItem;