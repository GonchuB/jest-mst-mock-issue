import { getEnv, types, flow } from "mobx-state-tree";

const userModel = {
  username: types.optional(types.string, ""),
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, "")
};

const userActions = self => ({
  fetchUser: flow(function* fetchUser({ username }) {
    const { api, errorStore, navigationStore } = getEnv(self);

    try {
      const userResponse = yield api.fetchUser({ username });
      self.username = userResponse.username;
      self.firstName = userResponse.firstName;
      self.lastName = userResponse.lastName;
      navigationStore.goTo("route1");
    } catch (error) {
      errorStore.handleError(new Error({ errorCode: 13 }));
    }
  })
});

const UserStore = types.model("UserStore", userModel).actions(userActions);

export default UserStore;
