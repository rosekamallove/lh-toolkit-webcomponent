# Contributing to LibreHealth Toolkit FHIR Webcomponents

There are many ways to contribute to LibreHealth! As referenced in our [CODE-OF-CONDUCT.md](
https://gitlab.com/librehealth/lsc/community-governance/blob/master/CODE-OF-CONDUCT.md), our pledge is fostering an open
and welcoming environment for contributors.

## Logistics
### Communicating with the Polymer team
Beyond this Gitlab repo, we have a variety of communication channels:
* [Forums](https://forums.librehealth.io/)
* [Chat](https://chat.librehealth.io/channel/dev)
* [Twitter](https://twitter.com/polymer)

### The Webcomponents Repository
The LibreHealth Toolkit will be providing the re-usable HTML elements that can communicate with a FHIR server to enable
use in an EHR system. The [LibreHealth Toolkit repo](https://gitlab.com/librehealth/toolkit/lh-toolkit) is the main place
to showcase the EHR system that has been assembled based on these custom elements. We expect many more repositories to come
up and developers are more than welcome to re-use these components and extend and build other custom elements.

This repository is based on the monorepo that provides a pattern to organize demos, unit/integration tests with /packages
having separate folders for each custom element.

## Contributing
### Filing bugs
The LibreHealth Toolkit team uses Gitlab for all of our software management, even though we mirror at GitHUb. 
Please do not use GitHub issues, but instead use Gitlab to track all bugs and features.
If you find an issue, please file it on the repository. The [LibreHealth Toolkit/lh-toolkit-webcomponents issues]
(https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/issues) should be used for custom elements related bugs
or features. For other toolkit issues, but use the lh-toolkit repository.

The maintainers will close issues. Please do no close issues that you have created, but feel free to comment on them.

### Contributing through Merge Requests/MR/PR (Pull Requests)
MR's are even better than issues. We hope you will send us merge requests for bug fixes or new reusable custom elements.
- Open an issue describing the problem that you are looking to solve in your MR (if one is not already open), and your approach to solving it. This makes it easier to have a conversation around the best general approach for solving your problem, outside of the code itself.
- Create a new [forum post](https://forums.librehealth.io), if want suggestions from the community on the issue
- Fork the repo you're making the fix on to your own Gitlab account.
- Code!
- Ideally, squash your commits into a single commit with a clear message of what the MR does. If it absolutely makes sense to keep multiple commits, that's OK - or perhaps consider making two separate MRs.
- **Include tests that test the range of behavior that changes with your MR.** If you MR fixes a bug, make sure your tests capture that bug. If your MR adds new behavior, make sure that behavior is fully tested. Every MR *must* include associated tests. (See [Unit tests](#unit-tests) for more.)
- Submit your MR, making sure it references the issue you created.
- If your MR fixes a bug, make sure the issue includes clear steps to reproduce the bug so we can test your fix.

If you've completed all of these steps the core team will do its best to respond to the MR as soon as possible.

#### Contributing Code to Elements
As the aim of webcomponents is to allow reusability, we would like to provide a common pattern that any new elements 
should follow. If you have suggestions, please create a forum post to discuss your new pattern.

We are using the material design language for our elements, but you can choose your own style, if thats what you prefer.
But please make it flexible using CSS mixins, so that it can be easily mixed with existing custom elements in this repo.
Otherwise, your custom element is probably better to be in your own separate repo that others can use, if you provide
documentation in our [README.md](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents/README.md). 

## Unit tests

The lh-toolkit-webcomponents use [`web-component-tester`](https://github.com/Polymer/web-component-tester) for unit tests.
The [`polyserve`](https://github.com/PolymerLabs/polyserve) utility is helpful for running tests in the browser.

For maximum flexibility, install `web-component-tester` and `polyserve` locally:

    npm install -g polyserve web-component-tester

### Running the unit tests

To run the unit tests:

1.  Clone the [lh-toolkit-webcomponents repo](https://gitlab.com/librehealth/toolkit/lh-toolkit-webcomponents).

2.  Install the dependencies:

		npm install

3.  Run the tests:

		polymer test

    Or if you have `web-component-tester` installed locally:

		wct

To run individual test suites:

<code>polymer test <var>path/to/suite</var></code>

Or:

<code>wct <var>path/to/suite</var></code>

For example:

	polymer test test/unit/template.html

You can also run tests in the browser:

	polymer serve

Navigate to:

[`http://localhost:8081/components/lh-toolkit-webcomponents/test/index.html`](http://localhost:8081/components/lh-toolkit-webcomponents/test/runner.html)

### Running lh-toolkit-webcomponents element unit tests

To run the element unit tests, you need a global install of `web-component-tester` or `polymer-cli` (or both). This can
be done using `npm i -g polymer-cli`

1. Clone the element repo.

1. Install the dependencies.

       bower install

1. Run the tests:

       wct

     Or run the tests in a browser:

       polymer serve

     Navigate to:

     <code>http://localhost:8081/components/lh-toolkit-webcomponents/test/<var>element-name</var>.html</code>

### Configuring `web-component-tester`

By default, `web-component-tester` runs tests on all installed browsers. You can configure it
to run tests on a subset of available browsers, or to run tests remotely using Sauce Labs.

See the [`web-component-tester` README](https://github.com/Polymer/web-component-tester) for
information on configuring the tool.

### Viewing the source documentation locally

You can view the updates you make to the source documentation locally with the following steps.
Make sure to rerun step 1 after every change you make.

1. Run `polymer analyze > analysis.json`

1. Run `polymer serve`

1. Open `http://127.0.0.1:8081/components/lh-toolkit-webcomponents/` to view the documentation
