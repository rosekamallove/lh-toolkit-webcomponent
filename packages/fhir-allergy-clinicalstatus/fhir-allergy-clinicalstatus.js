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
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirAllergyClinicalstatus extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option type of clinical status of allergy. Use this property to show/hide. Default: true */
            typeField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.typeField = 'true';
        this.value = {};
    }

    /**_didRender() delivers only after _render*/
    _didRender() {

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

    _render({typeField, url, value}) {
        return html`
   <div id="allergyDiv">
   <label>CLINICAL STATUS:</label>
   ${typeField !== 'false' ? html`
     <select class="typeField" value="${this.value}" on-change="${e => this.value.clinicalStatus = e.target.value}">
         <option value="active">Active</option>
         <option value="inactive">Inactive</option>
         <option value="resolved">Resolved</option>
     </select>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-allergy-clinicalstatus', FhirAllergyClinicalstatus);