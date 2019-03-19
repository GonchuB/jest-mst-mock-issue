import UserStore from "../user.store";

import api from "./api";
import errorStore from "./errorStore";
import navigationStore from "./navigationStore";

jest.mock("./errorStore");
jest.mock("./navigationStore");

export default UserStore.create(
  {},
  {
    api,
    errorStore,
    navigationStore
  }
);
