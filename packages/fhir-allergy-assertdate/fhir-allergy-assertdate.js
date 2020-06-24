/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-assertdate>` adds allergy assertion date to the page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 * In typical use, just use `<fhir-allergy-assertdate url=""></fhir-allergy-assertdate>`
 * It uses date-time input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-assertdate.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-textfield'
import '@polymer/iron-ajax/iron-ajax.js';
import moment from 'moment';

class FhirAllergyassertdate extends LitElement {
    static get properties() {
        return {
            /**assertDate is used to show persons allergy assertion date. Use this property to show/hide. Default: true */
            assertDate: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: String}
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.assertDate = 'true';
       
    }
    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergydate = this.parentNode.host;
            if (e.detail.response.assertedDate !== undefined) {
                allergydate.value = moment(e.detail.response.assertedDate).format('YYYY-MM-DDTHH:mm:ss');
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
       <div id="allergyDiv">
       ${this.assertDate !== 'false' ? html`<mwc-formfield class="assertDate" alignEnd label="Asserted Date:">
         <mwc-textfield outlined id="date" type="datetime-local" .value="${this.value}" @input="${e => this.value = e.target.value}"></mwc-textfield>
       </mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax> 
    `;
    }
}

window.customElements.define('fhir-allergy-assertdate', FhirAllergyassertdate);