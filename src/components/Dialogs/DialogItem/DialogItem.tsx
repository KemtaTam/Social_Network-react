import d from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

const activeLink = ({isActive}: {isActive: boolean}) => isActive ? d.active : d.item; 

type PropsType = {
	id: number;
	name: string;
}
const DialogItem: React.FC<PropsType> = ({id, name}) => {
	let path = "/dialogs/" + id;

	return (
		<li className={d.dialogs_li}>
			<NavLink to={path} className={activeLink}>{name}</NavLink>
		</li>
	)
}

export default DialogItem;