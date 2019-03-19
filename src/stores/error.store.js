import { getEnv, types, flow } from "mobx-state-tree";

const errorModel = {
  errorCode: types.optional(types.string, "")
};

const errorActions = self => ({
  handleError: flow(function* handleError(error) {
    const { api } = getEnv(self);

    self.errorCode = error.code;

    try {
      yield api.logError({ errorCode: self.errorCode });
    } catch (error) {
      console.error(error);
    }
  })
});

const ErrorStore = types.model("ErrorStore", errorModel).actions(errorActions);

export default ErrorStore;
