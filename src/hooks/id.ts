// "pathname/228" --> 228
export const useIdFromURL = (pathname: string) => {
	let dialogId;
	for (let i = pathname.length-1; i > 0; i--) {
		if(pathname[i] === '/') dialogId = +pathname.slice(i+1, pathname.length)
	}
	return dialogId || 0;
}