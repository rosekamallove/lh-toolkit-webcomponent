/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-operationalstatus>` adds operational status of hospital to page. Uses select to choose options.
 * In typical use, just use `<fhir-location-operationalstatus url=""></fhir-location-operationalstatus>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-operationalstatus.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-select/mwc-select.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-formfield/mwc-formfield';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';


class FhirLocationOperationalstatus extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option for operational status of location. Use this property to show/hide. Default: true */
            typeField: {type: String},
            /**systemField is a textfield to show system URI of Location. Use this property to show/hide.*/
            systemField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: Object}
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.typeField = 'true'
        this.systemField = 'false';
        this.value = {};
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var status = this.parentNode.host;
            if(e.detail.response.operationalStatus !== undefined) {
                status.value = e.detail.response.operationalStatus;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }

    render() {
        if (typeof(this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`
   <div id="div">
   ${this.typeField !== 'false' ? html`
     <mwc-formfield label ="OPERATIONAL STATUS:" alignEnd>
     <mwc-select class="typeField" .value = "${this.value.code}" @change="${e => this.value.code = e.target.value}">
         <mwc-list-item value="C">Closed</mwc-list-item>
         <mwc-list-item value="H">Housekeeping</mwc-list-item>
         <mwc-list-item value="I">Isolated</mwc-list-item>
         <mwc-list-item value="K">Contaminated</mwc-list-item>
         <mwc-list-item value="O">Occupied</mwc-list-item>
         <mwc-list-item value="U">Unoccupied</mwc-list-item>
    </mwc-select>
    </mwc-formfield>` : ''}
   ${this.systemField !== 'true' ? html`<mwc-textfield outlined class="systemField" .value="${this.value.system || ""}" @input="${e => this.value.system = e.target._input.value}"  label="System URI"></mwc-textfield>` : ''}
   </div>
   <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-operationalstatus', FhirLocationOperationalstatus);