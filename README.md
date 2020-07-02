
# LibreHealth Toolkit Web Components

> :warning: These components are still a work in progress. Elements are NOT available on NPM Registry.:warning:

[![pipeline status](https://gitlab.com/librehealth/lh-toolkit-webcomponents/badges/master/pipeline.svg)](https://gitlab.com/librehealth/lh-toolkit-webcomponents/commits/master)

The LibreHealth Toolkit Web Components implement [FHIR Resources](http://hl7.org/fhir) and GET/POST data using FHIR payload structures using [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). We also have custom elements that are used by other elements and are then used by elements that implement FHIR Resources.

Built using [Polymer 3.x](https://www.polymer-project.org/3.0/docs/devguide/feature-overview), we prefer that most lh-toolkit custom elements use the [Material Components Web](https://github.com/material-components/material-components-web) project and [LitElement](https://github.com/polymerlabs/lit-element). The Polymer library enables a reliable development workflow to build custom elements. Yet, these are only one pattern that we follow and other types of custom elements and webcomponents that use other frameworks like React, Angular, Vue etc. are also welcome.

Web Components can be seamlessly incorporated into a wide range of usage contexts. Whether you're already heavily invested in another framework or not, it's easy to incorporate LibreHealth Toolkit FHIR Web Components into your EHR system.

<!-- TODO
Insert screenshot of a demo page, including a code snippet.
-->

**[Demos](https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/)**

## Quick start

> Note: This guide assumes you have node v8.x LTS (with npm) installed locally.

The easiest way to try out the LibreHealth Toolkit Web Components is to use one of these online tools:

  * Runs in all [supported browsers](#browser-support).
  * Runs in browsers with [JavaScript Modules](https://caniuse.com/#search=modules).

When you're ready to use the LibreHealth FHIR Web Components in your web application:

  1. Ensure the webcomponents polyfills are included in your HTML page. 
     * Install webcomponents polyfills using 
     
        `npm i @webcomponents/webcomponentsjs`
     * Add webcomponents polyfills to your HTML page

		`<script src="@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>`

  2. Add one of the elements to your project, for example for fhir-period (till the time they are not published to NPM Registry):

      `npm i file:./packages/fhir-period`

  3. Import the element definition into your HTML page (e.g. for `<fhir-period>`):

      `<script type="module" src="@lh-toolkit/fhir-period/fhir-period.js"></script>`

      Or into your module script:

      `import {FhirPeriod} from "@lh-toolkit/fhir-period"`

  4. Create an instance of element in your HTML page, or via any framework that [supports rendering Custom Elements](https://custom-elements-everywhere.com/):

      `<fhir-period period='{"start":"2018-01-01"}'></fhir-period>`

  5. Install the Polymer CLI:

      `npm i -g polymer-cli`

  6. Run the development server and open a browser pointing to its URL:

      `polymer serve`

  > The LibreHealth Toolkit Web Components will be published on [npm](https://www.npmjs.com) using JavaScript Modules. This means it can take advantage of the standard native JavaScript module loader available in all current major browsers.
  >
  > However, since the LibreHealth Toolkit Web Components use npm convention to reference dependencies by name, a light transform to rewrite specifiers to URLs is required to get it to run in the browser. The polymer-cli's development server `polymer serve` automatically handles this transform.

Tools like [WebPack](https://webpack.js.org/) and [Rollup](https://rollupjs.org/) can also be used to serve and/or bundle.

## Contributing guide (refer to [CONTRIBUTING.MD](https://gitlab.com/librehealth/lh-toolkit-webcomponents/CONTRIBUTING.MD) for details)
Below are instructions for setting up project development.

1. fork this repo to your personal Gitlab account
2. `git clone --recursive <repo.git>` that repo, and add this repo as a remote
3. install yarn and lerna using: `npm i -g yarn lerna`
4. install dependencies by running `lerna bootstrap --use-workspaces`
5. to run a development server: `polymer serve --open` (will open the demos)
6. to run tests: `polymer test` using Selenium or in the browser do `polymer serve` and navigate to `http://127.0.0.1:8081/components/lh-toolkit-webcomponents/test/`

### Source structure for new custom elements
1. create a folder with all your source under `/packages`. If its a FHIR Resource Element call it something like `fhir-<resource>-<type>`, if its a type `fhir-<type>`
2. create a demo html under `/demos`. Name it same as your custom element `tag-name.html`
3. create unit tests under `/test/unit` and integration tests under `/test/integration` and test resources under `/test/testResources`
4. add your demo page under `/index.html`
5. add your demo html to `/polymer.json` in the fragments JSON

### Rebuild CSS for components

Components define their css using [SASS](http://sass-lang.com/). The SASS output is built into a javascript module which exports the component's styling as a [lit-html](https://github.com/Polymer/lit-html) template.

## Useful Links

- [All Components](packages/)
- [Demos](https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/)
- [Contributing](CONTRIBUTING.md)

## Browser Support

We officially support the last two versions of every major browser. Specifically, we test on the following browsers:

- Chrome
- Firefox
- Safari (TODO)
- IE 11/Edge (TODO)
- Opera (TODO)
- Mobile Safari (TODO)
- Chrome on Android (TODO)
