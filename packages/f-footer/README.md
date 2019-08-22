<div align="center">
<h1>f-footer</h1>

<img width="125" alt="Fozzie Bear" src="../../bear.png" />

<p>Global Footer Component for Vue.js.</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-footer.svg)](https://badge.fury.io/js/%40justeat%2Ff-footer)
[![Build Status](https://travis-ci.org/justeat/f-footer.svg)](https://travis-ci.org/justeat/f-footer)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-footer/badge.svg)](https://coveralls.io/github/justeat/f-footer)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-footer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-footer?targetFile=package.json)

---

1. Add the module to your project

    ```bash
    yarn add @justeat/f-footer
    ```

1. Import the component

    You can import it in your Vue SFC like this (please note that styles have to be imported separately):

    ```
    import VueFooter from '@justeat/f-footer';
    import '@justeat/f-footer/dist/f-footer.css';

    export default {
        components: {
            VueFooter
        }
    }
    ```

    - If there is a vue-i18n plugin in the project, footer component can be called without any props:

    `<vue-footer />`

    - Or you can pass locale as a property to specify the tenant:

    `<vue-footer
        locale="en-GB" />`

1. Browser Support

    This component extends [@justeat/browserslist-config-fozzie](https://github.com/justeat/browserslist-config-fozzie).

1. Building the Module

    Run `yarn build`.

1. Running locally

    Run `yarn demo` in `/packages/f-footer` to render testing wrapper component

1. Running the Tests

    Run `yarn test`.

1. Running Lint check

    Run `yarn lint`.