/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-onset>` adds allergy onset date to the page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 * In typical use, just use `<fhir-allergy-onset url=""></fhir-allergy-onset>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-onset.html
 *
 */
/**converts between json and string attributes */
const jsonStringConverter = {
    toAttribute(val) {
        return JSON.parse(val);
    },
    fromAttribute(str) {
        return JSON.stringify(str);
    }
}

import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import moment from 'moment';

class FhirAllergyOnset extends LitElement {
    static get properties() {
        return {
            /**assertDate is used to show persons allergy onset date. Use this property to show/hide. Default: true */
            onsetDate: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url:{type: String},
            /**value is used to take the input value of each field*/
            value: {type: jsonStringConverter, reflect:true}
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.onsetDate = 'true';
        this.value = {};
    }
    /**updated() delivers only after _render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergydate = this.parentNode.host;
            if (e.detail.response.onsetDateTime !== undefined) {
                allergydate.value = moment(e.detail.response.onsetDateTime).format('YYYY-MM-DDTHH:mm:ss');
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
       <div id="allergyDiv">
       ${this.onsetDate !== 'false' ? html`<mwc-formfield class="assertDate" alignEnd label="Onset date:">
       <mwc-textfield outlined id="date" type="datetime-local" .value="${this.value}" @input="${e => this.value = e.target.value}"></mwc-textfield>
       </mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax> 
    `;
    }
}

window.customElements.define('fhir-allergy-onset', FhirAllergyOnset);