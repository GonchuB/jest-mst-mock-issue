import NavigationStore from "../navigation.store";

import errorStore from "./errorStore";

jest.mock("./errorStore");

export default NavigationStore.create(
  {},
  {
    errorStore
  }
);
