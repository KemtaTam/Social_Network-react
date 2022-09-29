import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { UserItem } from "./UserItem/UserItem";
import { UsersForm } from "./UsersForm";
import { actions, FilterType, getUsers } from "../../redux/reducers/users-reducer";
import Paginator from "../../Components/common/Paginator/Paginator";
import Preloader from "../../Components/common/Preloader/Preloader";
import s from "./Users.module.css";

const Users = () => {
	const {
		totalItemsCount,
		pageSize,
		beginPage,
		endPage,
		currentPage,
		usersData,
		followingInProgress,
		isFetching,
		filter,
	} = useAppSelector((state) => state.usersPage);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize, filter));
	}, [currentPage, pageSize, filter]);

	const setCurrentPage = (pNum: number) => {
		dispatch(actions.setCurrentPage(pNum));
		dispatch(getUsers(pNum, pageSize, filter));
	};

	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter));
	};

	const userItem = usersData.map((el) => {
		return <UserItem user={el} followingInProgress={followingInProgress} key={el.id} />;
	});

	return (
		<div className={s.wrapper}>
			<UsersForm onFilterChanged={onFilterChanged} />
			<Paginator
				totalItemsCount={totalItemsCount}
				pageSize={pageSize}
				beginPage={beginPage}
				endPage={endPage}
				currentPage={currentPage}
				setBeginEndPage={actions.setBeginEndPage}
				setCurrentPage={setCurrentPage}
				portionSize={10}
			/>
			{isFetching ? <Preloader /> : <div className={s.userWrapper}>{userItem}</div>}
		</div>
	);
};

export default Users;
