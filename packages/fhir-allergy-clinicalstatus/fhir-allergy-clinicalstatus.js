/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-clinicalstatus>` adds clinical status of allergy to  page. Uses select to choose options.
 * In typical use, just use `<fhir-allergy-clinicalstatus url=""></fhir-allergy-clinicalstatus>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-clinicalstatus.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@polymer/iron-ajax/iron-ajax.js';

const jsonStringConverter = {
    toAttribute(val) {
        // convert the value to string so it can be used as an attribute value
        return JSON.stringify(val);
    },
    fromAttribute(str) {
        // convert the attribute value to a JS object to use it as a property
        return JSON.parse(str);
    }
}
class FhirAllergyClinicalstatus extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option type of clinical status of allergy. Use this property to show/hide. Default: true */
            typeField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: jsonStringConverter, reflect:true}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.typeField = 'true';
        this.value = {};
        
    }

    /**updated delivers only after render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergy = this.parentNode.host;
            if (e.detail.response.clinicalStatus !== undefined) {
                allergy.value = e.detail.response.clinicalStatus;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
    <div id="allergyDiv">
   <mwc-formfield label ="CLINICAL STATUS:" alignEnd>
   ${this.typeField !== 'false' ? html`
   <mwc-select outlined class="typeField" value="${this.value}" @change="${e => this.value = e.target.value}">
        <mwc-list-item value="active">Active</mwc-list-item>
        <mwc-list-item value="inactive">Inactive</mwc-list-item>
        <mwc-list-item value="resolved">Resolved</mwc-list-item>
    </mwc-select>` : ''}
    </mwc-formfield> 
    </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-allergy-clinicalstatus', FhirAllergyClinicalstatus);