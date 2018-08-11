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
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationOperationalstatus extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option for operational status of location. Use this property to show/hide. Default: true */
            typeField: String,
            /**systemField is a textfield to show system URI of Location. Use this property to show/hide.*/
            systemField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.typeField = 'true'
        this.systemField = 'false';
        this.value = {};
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
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

    _render({typeField, url, value, systemField}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`
   <div id="div">
   ${typeField !== 'false' ? html`
     <label>Operational Status:</label>
     <select class="typeField" value="${this.value.code}" on-change="${e => this.value.code = e.target.value}">
         <option value="C">Closed</option>
         <option value="H">Housekeeping</option>
         <option value="I">Isolated</option>
         <option value="K">Contaminated</option>
         <option value="O">Occupied</option>
         <option value="U">Unoccupied</option
     </select>` : ''}
   ${systemField !== 'false' ? html`<mwc-textfield outlined class="systemField" value="${this.value.system}" on-input="${e => this.value.system = e.target._input.value}"  label="System URI"></mwc-textfield>` : ''}
   </div>
   <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-operationalstatus', FhirLocationOperationalstatus);