/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-status>` adds status of the location to page. Uses select to choose options.
 * In typical use, just use `<fhir-organisation-type url=""></fhir-location-status>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-status.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationStatus extends LitElement {
    static get properties() {
        return {
            /**statusField is a selectable option for location status. Use this property to show/hide. Default: true */
            statusField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: String
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.statusField = 'true';
        this.value = '';
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
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

    _render({statusField, url, value}) {
        return html`
   <div id="div">
   <label>NAME:</label>
   ${statusField !== 'false' ? html`
     <label>Type:</label>
     <select class="statusField" value="${this.value}" on-change="${e => this.value = e.target.value}">
         <option value="inactive">Inactive</option>
         <option value="suspended">Suspended</option>
         <option value="active">Active</option>
     </select>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-status', FhirLocationStatus);