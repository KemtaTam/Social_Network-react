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
	let pageCount = Math.ceil(totalItemsCount / pageSize);
	let pages: Array<number> = [];

	for (let i = beginPage; i <= endPage; i++) {
		pages.push(i);
		if (i === pageCount) break;
	}

	pages = pages.map((pNum) => {
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
		setBeginEndPage(begin, end);
		setCurrentPage(begin);
	};
	let scrollRight = () => {
		let begin = beginPage + portionSize;
		let end = endPage + portionSize;
		setBeginEndPage(begin, end);
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
			{pages}
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
