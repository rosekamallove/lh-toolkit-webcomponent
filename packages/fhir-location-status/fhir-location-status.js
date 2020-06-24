/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-status>` adds status of the location to page.
 * This component is a coded concept and hence the value set is hardcoded as per FHIR standard-maturity level 3.
 * Uses select to choose options.
 * In typical use, just use `<fhir-location-status url=""></fhir-location-status>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-status.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationStatus extends LitElement {
    static get properties() {
        return {
            /**statusField is a selectable option for location status. Use this property to show/hide. Default: true */
            statusField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: String}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.statusField = 'true';
        this.value = '';
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var status = this.parentNode.host;
            if(e.detail.response.status !== undefined) {
                status.value = e.detail.response.status;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }

    render() {
        return html`
   <div id="div">
   ${this.statusField !== 'false' ? html`
   <label>Status:</label>
        <mwc-select class="statusField" .value="${this.value}" @change="${e => this.value = e.target.value}">
         <mwc-list-item value="inactive">Inactive</mwc-list-item>
         <mwc-list-item value="suspended">Suspended</mwc-list-item>
         <mwc-list-item value="active">Active</mwc-list-item>
     </mwc-select>
     ` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-status', FhirLocationStatus);