
<div align="center">
  <h1>f-button</h1>

  <img width="125" alt="Fozzie Bear" src="../../bear.png" />

  <p>The generic button component</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-button.svg)](https://badge.fury.io/js/%40justeat%2Ff-button)
[![CircleCI](https://circleci.com/gh/justeat/fozzie-components.svg?style=svg)](https://circleci.com/gh/justeat/workflows/fozzie-components)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-button/badge.svg)](https://coveralls.io/github/justeat/f-button)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-button/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-button?targetFile=package.json)


## Usage

1.  Install the module using NPM or Yarn:

    ```bash
    yarn add @justeat/f-button
    ```

    ```bash
    npm install @justeat/f-button
    ```

2.  Import the component

    You can import it in your Vue SFC like this (please note that styles have to be imported separately):

    ```
    import FButton from '@justeat/f-button';
    import '@justeat/f-button/dist/f-button.css';

    export default {
        components: {
            FButton
        }
    }
    ```

    If you are using Webpack, you can import the component dynamically to separate the `f-button` bundle from the main `bundle.client.js`:

    ```
    import '@justeat/f-button/dist/f-button.css';

    export default {
        components: {
            ...
            FButton: () => import(/* webpackChunkName: "f-button" */ '@justeat/f-button')
        }
    }

    ```

3.  Call the component in your template:

    ```
    <f-button buttonType="secondary" buttonSize="small" isFullWidth />
    ```

    Accepted properties:
    - buttonType - primary, secondary, outline, ghost, link, icon, default is primary
    - buttonSize - large, medium, small, xsmall, default is medium
    - isFullWidth - true/false, default is false

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
# Run Unit / Integration / Contract tests for f-button
cd ./fozzie-components/packages/f-button
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
# Run Component tests for f-button
# Note: Ensure Storybook is not running when running the following commands
cd ./fozzie-components/packages/f-button
yarn test-component:chrome
```


## Documentation to be completed once module is in stable state.
