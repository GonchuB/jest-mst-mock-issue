import store from "../mocks/userStore";
import errorStore from "../mocks/errorStore";
import navigationStore from "../mocks/navigationStore";
import api from "../mocks/api";

const mockUser = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe"
};

describe("userStore", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches the user via api", async () => {
    jest.spyOn(api, "fetchUser").mockResolvedValueOnce(mockUser);

    const username = "johndoe";
    await store.fetchUser(username);

    expect(api.fetchUser).toHaveBeenCalledTimes(1);

    api.fetchUser.mockRestore();
  });

  test("go to route1 if succeeds", async () => {
    jest.spyOn(api, "fetchUser").mockResolvedValueOnce(mockUser);

    const username = "johndoe";
    await store.fetchUser(username);

    expect(navigationStore.goTo).toHaveBeenCalledTimes(1);
    expect(navigationStore.goTo).toHaveBeenCalledWith("route1");

    api.fetchUser.mockRestore();
  });

  test("handle the error if it fails", async () => {
    jest
      .spyOn(api, "fetchUser")
      .mockRejectedValueOnce(new Error("some api error"));

    const username = "johndoe";
    await store.fetchUser(username);

    expect(errorStore.handleError).toHaveBeenCalledTimes(1);

    api.fetchUser.mockRestore();
  });
});
