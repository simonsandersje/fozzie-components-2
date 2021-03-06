
<div align="center">
  <h1>f-alert</h1>

  <img width="125" alt="Fozzie Bear" src="../../bear.png" />

  <p>Fozzie Alert Component</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-alert.svg)](https://badge.fury.io/js/%40justeat%2Ff-alert)
[![CircleCI](https://circleci.com/gh/justeat/fozzie-components.svg?style=svg)](https://circleci.com/gh/justeat/workflows/fozzie-components)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-alert/badge.svg)](https://coveralls.io/github/justeat/f-alert)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-alert/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-alert?targetFile=package.json)


## Usage

1.  Install the module using NPM or Yarn:

    ```bash
    yarn add @justeat/f-alert
    ```

    ```bash
    npm install @justeat/f-alert
    ```

2.  Import the component

    You can import it in your Vue SFC like this (please note that styles have to be imported separately):

    ```
    import FAlert from '@justeat/f-alert';
    import '@justeat/f-alert/dist/f-alert.css';

    export default {
        components: {
            FAlert
        }
    }
    ```

    If you are using Webpack, you can import the component dynamically to separate the `f-alert` bundle from the main `bundle.client.js`:

    ```
    import '@justeat/f-alert/dist/f-alert.css';

    export default {
        components: {
            ...
            FAlert: () => import(/* webpackChunkName: "f-alert" */ '@justeat/f-alert')
        }
    }

    ```

## Development
It is recommended to run the following commands at the root of the monorepo in order to install dependencies and allow you to view components in isolation via Storybook.

```bash
# cd ./fozzie-components
yarn install

## Testing
Unit / Integration / Contract

```bash
# Run Unit / Integration / Contract tests for all components
cd ./fozzie-components
yarn test
```

OR

```bash
# Run Unit / Integration / Contract tests for f-alert
cd ./fozzie-components/packages/f-alert
yarn test
```

Component Tests
```bash
# Run Component tests for all components
# Note: Ensure Storybook is not running when running the following commands
cd ./fozzie-components

yarn storybook:build
yarn storybook:serve-static
yarn test-component:chrome
```

OR

```bash
# Run Component tests for f-alert
# Note: Ensure Storybook is not running when running the following commands
cd ./fozzie-components/packages/f-alert
yarn test-component:chrome
```

## Documentation to be completed once module is in stable state.
