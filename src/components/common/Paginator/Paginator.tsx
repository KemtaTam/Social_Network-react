import { AnyAction } from "redux";
import { useAppDispatch } from "../../../hooks/redux";
import s from "./Paginator.module.css";

type PropsType = {
	portionSize: number;
	totalItemsCount: number;
	pageSize: number;
	beginPage: number;
	endPage: number;
	currentPage: number;
	setBeginEndPage: (begin: number, end: number) => void;
	setCurrentPage: (page: number) => void;
};

const Paginator: React.FC<PropsType> = ({
	portionSize,
	totalItemsCount,
	pageSize,
	beginPage,
	endPage,
	currentPage,
	setBeginEndPage,
	setCurrentPage,
}) => {
	const dispatch = useAppDispatch();

	const pageCount = Math.ceil(totalItemsCount / pageSize);
	const pages: Array<number> = [];

	for (let i = beginPage; i <= endPage; i++) {
		pages.push(i);
		if (i === pageCount) break;
	}

	const pagesEl = pages.map((pNum) => {
		return (
			<div
				className={currentPage === pNum ? s.selected : undefined}
				key={pNum}
				onClick={() => setCurrentPage(pNum)}>
				{pNum}
			</div>
		);
	});

	let scrollLeft = () => {
		let begin = beginPage - portionSize;
		let end = endPage - portionSize;
		// todo
		dispatch(setBeginEndPage(begin, end) as unknown as AnyAction);
		setCurrentPage(begin);
	};
	let scrollRight = () => {
		let begin = beginPage + portionSize;
		let end = endPage + portionSize;
		// todo
		dispatch(setBeginEndPage(begin, end) as unknown as AnyAction);
		setCurrentPage(begin);
	};

	return (
		<div className={s.pages}>
			{beginPage > 1 ? (
				<button className={s.bLeft} onClick={scrollLeft}>
					left
				</button>
			) : null}
			{beginPage > 1 ? "..." : null}
			{pagesEl}
			{endPage < pageCount ? "..." : null}
			{endPage < pageCount ? (
				<button className={s.bRight} onClick={scrollRight}>
					right
				</button>
			) : null}
		</div>
	);
};

export default Paginator;
