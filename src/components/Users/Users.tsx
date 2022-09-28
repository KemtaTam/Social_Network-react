import React from "react";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";
import { UsersType } from "../../types/types";
import s from "./Users.module.css";
import { UsersForm } from "./UsersForm";
import Preloader from "../common/Preloader/Preloader";
import { FilterType } from "../../redux/reducers/users-reducer";

type PropsType = {
	portionSize?: number;
	totalItemsCount: number;
	pageSize: number;
	beginPage: number;
	endPage: number;
	currentPage: number;
	usersData: Array<UsersType>;
	setBeginEndPage: (begin: number, end: number) => void;
	setCurrentPage: (page: number) => void;
	changeFollowTC: (userId: number, followed: boolean) => void;
	onFilterChanged: (filter: FilterType) => void,
	followingInProgress: Array<number>;
	isFetching: boolean;
};

const Users: React.FC<PropsType> = ({
	totalItemsCount,
	pageSize,
	beginPage,
	endPage,
	currentPage,
	setBeginEndPage,
	setCurrentPage,
	usersData,
	followingInProgress,
	changeFollowTC,
	isFetching,
	onFilterChanged,
}) => {
	let userItem = usersData.map((el) => {
		return (
			<UserItem
				user={el}
				changeFollowTC={changeFollowTC}
				followingInProgress={followingInProgress}
				key={el.id}
			/>
		);
	});

	return (
		<div className={s.wrapper}>
			<UsersForm onFilterChanged={onFilterChanged}/>
			<Paginator
				totalItemsCount={totalItemsCount}
				pageSize={pageSize}
				beginPage={beginPage}
				endPage={endPage}
				currentPage={currentPage}
				setBeginEndPage={setBeginEndPage}
				setCurrentPage={setCurrentPage}
				portionSize={10}
			/>
			{isFetching ? <Preloader /> : <div className={s.userWrapper}>{userItem}</div>}
		</div>
	);
};

export default Users;
