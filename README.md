# Excessive mocking of MST references

```sh
yarn

yarn test
```

See (debug your own build of jest-mock or something) how many times the MST functions are mocked (over 1700 mocks for this simple example at least).

The only test that runs is on [stores/user.store.test.js](https://github.com/GonchuB/jest-mst-mock-issue/blob/master/src/stores/user.store.test.js).
