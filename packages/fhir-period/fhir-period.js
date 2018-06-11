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

import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import moment from 'moment';

class FhirPeriod extends LitElement {
    static get properties() {
        return {
            /** The period Object with start and end properties should be in the two fields. If no value is passed, the current datetime is default */
            value: Object,
            /** Whether to show the start input field. Default: true */
            start: Boolean,
            /** Whether to show the end input field. Default: false */
            end: Boolean,
        }
    }

    constructor() {
        super()
        this.value = '{"start":"' + moment().toISOString() + '", "end": "' + moment().toISOString() + '"}';
        this.start = true;
        this.end = false;
    }

    _render({value, start, end}) {
        if (value != undefined) {
            if (typeof(value) === "string") { // value passed via html as string
                if (JSON.parse(value).start != undefined) {
                    var startDate = moment(JSON.parse(value).start).format('YYYY-MM-DDTHH:mm:ss');
                }
                if (JSON.parse(value).end != undefined) {
                    var endDate = moment(JSON.parse(value).end).format('YYYY-MM-DDTHH:mm:ss');
                }
            } else if (typeof(value) == "object") { // value passed via js as object
                if (value.start != undefined) {
                    var startDate = moment(value.start).format('YYYY-MM-DDTHH:mm:ss');
                }
                if (value.end != undefined) {
                    var endDate = moment(value.end).format('YYYY-MM-DDTHH:mm:ss');
                }
            }
        }

        return html`
            ${start ? html`Start:<input class="startField" type="datetime-local" value="${startDate}">` : ''}
            ${end ? html`End:<input class="endField" type="datetime-local" value="${endDate}">` : ''}
        `;
    }
}

window.customElements.define('fhir-period', FhirPeriod);