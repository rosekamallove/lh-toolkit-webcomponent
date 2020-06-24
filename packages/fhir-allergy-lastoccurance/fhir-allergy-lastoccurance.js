/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-lastoccurance>` adds allergy last date to the page. Uses input tupe date in mm/dd/yyyy format
 * In typical use, just use `<fhir-allergy-lastoccurance url=""></fhir-allergy-lastoccurance>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-lastoccurance.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-textfield'
import '@polymer/iron-ajax/iron-ajax.js';
import moment from 'moment';

class FhirAllergyLastoccurance extends LitElement {
    static get properties() {
        return {
            /**lastoccurence is used to show persons allergy last occurrence date of allergy. Use this property to show/hide. Default: true */
            lastoccurance: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: String}
        }
    }

    constructor() {
        super();
        this.lastoccurance = 'true';
        
        
        
    }

    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergydate = this.parentNode.host;
            if (e.detail.response.lastOccurance !== undefined) {
                allergydate.value = moment(e.detail.response.lastOccurance).format('YYYY-MM-DDTHH:mm:ss');
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }


    render() {
        return html`
       <div id="allergyDiv">
       ${this.lastoccurance !== 'false' ? html`<mwc-formfield class="lastOccurance" alignEnd label="Last Occurrence:">
         <mwc-textfield outlined id="date" type="datetime-local" .value="${this.value}" @input="${e => this.value = e.target.value}"></mwc-textfield>
       </mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax> 
    `
    ;
    }
}

window.customElements.define('fhir-allergy-lastoccurance', FhirAllergyLastoccurance);