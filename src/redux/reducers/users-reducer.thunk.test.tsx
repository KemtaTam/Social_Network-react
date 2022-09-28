import { actions, changeFollowTC } from "./users-reducer";
import { usersAPI } from "./../../api/users-api";
import { DefaultResponseType, ResultCodesEnum } from "../../api/api";

jest.mock("./../../api/users-api"); //в usersAPI будет фейковая реализация
const usesrAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();
beforeEach(() => {
	dispatchMock.mockClear();
	getStateMock.mockClear();
	usesrAPIMock.follow.mockClear();
	usesrAPIMock.unfollow.mockClear();
});

const result: DefaultResponseType = {
	data: {},
	messages: [],
	resultCode: ResultCodesEnum.Success,
};

test("thunk follow is success", async () => {
	usesrAPIMock.follow.mockReturnValue(Promise.resolve(result));
	const thunk = changeFollowTC(1, false);

	await thunk(dispatchMock, getStateMock, {});

	expect(dispatchMock).toBeCalledTimes(3);
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingProgress(true, 1));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.changeFollow(1));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingProgress(false, 1));
});
test("thunk unfollow is success", async () => {
	usesrAPIMock.unfollow.mockReturnValue(Promise.resolve(result));
	const thunk = changeFollowTC(2, true);

	await thunk(dispatchMock, getStateMock, {});

	expect(dispatchMock).toBeCalledTimes(3);
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingProgress(true, 2));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.changeFollow(2));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingProgress(false, 2));
});
