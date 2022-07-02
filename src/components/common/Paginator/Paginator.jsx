import s from "./Paginator.module.css"
//засунуть в юс стейт курент пейдж 
const Paginator = ({portionSize, ...props}) => {

	let pageCount = Math.ceil(props.totalItemsCount /  props.pageSize);
	let pages = [];

	for(let i=props.beginPage; i<=props.endPage; i++){
		pages.push(i);
		if(i === pageCount) break;
	}

	pages = pages.map(pNum => {
		return (
			<div className={props.currentPage === pNum ? s.selected : undefined} key={pNum}
				 onClick={() => props.setCurrentPage(pNum)}>{pNum}
			</div>
		) 
	})

	let scrollLeft = () => {
		let begin = props.beginPage - portionSize;
		let end = props.endPage - portionSize;
		props.setBeginEndPage(begin, end);
		props.setCurrentPage(begin)
	}
	let scrollRight = () => {
		let begin = props.beginPage + portionSize;
		let end = props.endPage + portionSize;
		props.setBeginEndPage(begin, end)
		props.setCurrentPage(begin)
	}
	
	return (
		<div className={s.pages}>
			{
				props.beginPage > 1 ? 
					<button className={s.bLeft} onClick={scrollLeft}>left</button> : 
					null
			}
			{props.beginPage > 1 ? "..." : null} 
				{pages} 
			{props.endPage < pageCount ? "..." : null}
			{
				props.endPage < pageCount ? 
					<button className={s.bRight} onClick={scrollRight}>right</button> : 
					null
			}
		</div>
	)
}

export default Paginator;

