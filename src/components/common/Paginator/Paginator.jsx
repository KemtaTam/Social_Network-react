import s from "./Paginator.module.css"

const Paginator = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount /  props.pageSize);
	let pages = [];

	for(let i=1; i<=pageCount; i++){
		pages.push(i);
		if(i === 20) break;
	}

	pages = pages.map(pNum => {
		return (
			<div className={props.currentPage === pNum ? s.selected : undefined} key={pNum}
				 onClick={() => props.setCurrentPage(pNum)}>{pNum}
			</div>
		) 
	})
	
	return (
		<div className={s.pages}>
			{pages}
		</div>
	)
}

export default Paginator;

