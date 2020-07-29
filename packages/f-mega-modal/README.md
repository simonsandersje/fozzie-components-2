
<div align="center">
  <h1>f-mega-modal</h1>

  <img width="125" alt="Fozzie Bear" src="../../bear.png" />

  <p>A Vue.js modal component</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-mega-modal.svg)](https://badge.fury.io/js/%40justeat%2Ff-mega-modal)
[![CircleCI](https://circleci.com/gh/justeat/fozzie-components.svg?style=svg&circle-token=4c77c1990b98c8e06e01b497bc80f376346f609d)](https://circleci.com/gh/justeat/workflows/fozzie-components)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-mega-modal/badge.svg)](https://coveralls.io/github/justeat/f-mega-modal)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-mega-modal/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-mega-modal?targetFile=package.json)


## Usage

1.  Install the module using NPM or Yarn:

    ```bash
    yarn add @justeat/f-mega-modal
    ```

    ```bash
    npm install @justeat/f-mega-modal
    ```

2.  Import the component

    You can import it in your Vue SFC like this (please note that styles have to be imported separately):

    ```
    import MegaModal from '@justeat/f-mega-modal';
    import '@justeat/f-mega-modal/dist/f-mega-modal.css';

    export default {
        components: {
            MegaModal
        }
    }
    ```

    If you are using Webpack, you can import the component dynamically to separate the header bundle from the main `bundle.client.js`:

    ```
    import '@justeat/f-mega-modal/dist/f-mega-modal.css';

    export default {
        components: {
            ...
            MegaModal: () => import(/* webpackChunkName: "mega-modal" */ '@justeat/f-mega-modal')
        }
    }

    ```

## Development

Running below `yarn` commands from the component folder, starts a development
server displaying a preview example of the component implementation.

```bash
# cd /packages/f-mega-modal
yarn install

# followed by
yarn demo
```

## Documentation to be completed once module is in stable state.