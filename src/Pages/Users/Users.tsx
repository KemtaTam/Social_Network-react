import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const queryParamsFromURL: { friend?: string; term?: string; page?: string } = {};

		if (filter.term) queryParamsFromURL.term = filter.term;
		console.log("filter.friend: ", filter.friend);
		if (filter.friend !== null) {
			filter.friend
				? (queryParamsFromURL.friend = "true")
				: (queryParamsFromURL.friend = "false");
		}
		if (currentPage !== 1) queryParamsFromURL.page = String(currentPage);

		setSearchParams(queryParamsFromURL);
	}, [filter, currentPage]);

	useEffect(() => {
		const curPageFromURL = (searchParams.get("page") as number | null) || currentPage;
		const term = searchParams.get("term") || filter.term;
		let friend: boolean | null = filter.friend;

		if (searchParams.get("friend")) {
			friend =
				searchParams.get("friend") === "null"
					? null
					: searchParams.get("friend") === "true"
					? true
					: false;
		}
		
		dispatch(getUsers(curPageFromURL, pageSize, { term, friend }));
	}, []);

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
