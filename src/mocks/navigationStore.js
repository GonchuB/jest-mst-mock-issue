import NavigationStore from "../stores/navigation.store";

import errorStore from "./errorStore";

jest.mock("./errorStore");

export default NavigationStore.create(
  {},
  {
    errorStore
  }
);
