import notFound from "./404-Page2.gif";
import s from "./NotFound404.module.css";

export const NotFound404 = () => {
	return (
		<div className={s.wrapper}>
			<p className={s.error}>Not found</p>
			<img className={s.notFound} src={notFound} alt="not found" />
		</div>
	);
};
