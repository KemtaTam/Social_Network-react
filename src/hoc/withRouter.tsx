import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter<WCP>(WrappedComponent: React.ComponentType<WCP>) {
	return (props: WCP) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <WrappedComponent {...props} router={{ location, navigate, params }} />;
	};
}
