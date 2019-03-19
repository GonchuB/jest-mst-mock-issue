import { getEnv, types } from "mobx-state-tree";

const navigationModel = {
  activeRoute: types.optional(types.string, "")
};

const VALID_ROUTES = ["route1", "route2"];

const navigationActions = self => ({
  goTo: function goTo(route) {
    const { errorStore } = getEnv(self);

    if (VALID_ROUTES.includes(route)) {
      self.activeRoute = route;
    } else {
      errorStore.handleError(new Error({ errorCode: 12 }));
    }
  }
});

const NavigationStore = types
  .model("NavigationStore", navigationModel)
  .actions(navigationActions);

export default NavigationStore;
