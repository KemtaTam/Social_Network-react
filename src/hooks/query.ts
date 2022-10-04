import { useLocation } from 'react-router-dom';

export const useQuery = () => {
	// window.location.search
	return new URLSearchParams(useLocation().search);
}