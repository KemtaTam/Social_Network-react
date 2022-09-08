import s from "./Preloader.module.css";
import loader from "./../../../images/loader.gif";

let Preloader = () => {
	return (
		<div className={s.loader_wrapper}>
			<img className={s.loader} src={loader} alt="" />
		</div>
	);
};

export default Preloader;
