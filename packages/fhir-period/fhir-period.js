/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * `<fhir-period>` adds start and end datetime input form fields to your page. Uses moment.js to convert formats
 * ## Displays a regular textfield in Firefox and Safari
 * In typical use, just use `<fhir-period></fhir-period>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-period.html
 *
 */

import {LitElement, html} from 'lit-element';
import moment from 'moment';
import '@material/mwc-textfield'

class FhirPeriod extends LitElement {
    static get properties() {
        return {
            /** The period Object with start and end properties should be in the two fields. If no value is passed, the current datetime is default */
            value: {type:Object},
            /** Whether to show the start input field. Default: true */
            start:{type:Boolean},
            /** Whether to show the end input field. Default: false */
            end: {type:Boolean},
        }
    }

    constructor() {
        super()
        this.value = '{"start":"' + moment().toISOString() + '", "end": "' + moment().toISOString() + '"}';
        this.start = true;
        this.end = false;
    }

    render() {
        if (this.value != undefined) {
            if (typeof(this.value) === "string") { // value passed via html as string
                if (JSON.parse(this.value).start != undefined) {
                    var startDate = moment(JSON.parse(this.value).start).format('YYYY-MM-DDTHH:mm:ss');
                }
                if (JSON.parse(this.value).end != undefined) {
                    var endDate = moment(JSON.parse(this.value).end).format('YYYY-MM-DDTHH:mm:ss');
                }
            } else if (typeof(this.value) == "object") { // value passed via js as object
                if (this.value.start != undefined) {
                    var startDate = moment(this.value.start).format('YYYY-MM-DDTHH:mm:ss');
                }
                if (this.value.end != undefined) {
                    var endDate = moment(this.value.end).format('YYYY-MM-DDTHH:mm:ss');
                }
            }
        }

        return html`
            ${this.start ? html`<mwc-textfield  label ="Start" outlined id= "start" class="startField" type="datetime-local"  .value="${startDate}"></mwc-textfield>` : ''}
            ${this.end ? html`<mwc-textfield label ="End" outlined  class="endField" type="datetime-local" .value="${endDate}"></mwc-textfield>` : ''}
        `;
    }
}

window.customElements.define('fhir-period', FhirPeriod);