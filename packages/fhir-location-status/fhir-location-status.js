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
            statusField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.statusField = true;
        this.value = {};
    }

    _setValue() {
        if (this.value.length != undefined) {
            this.shadowRoot.childNodes[1].querySelectorAll('.statusField')[0].value = this.value;
        }
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.status != undefined) {
                this.parentNode.host.value = e.detail.response.status;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.status == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url && this.value) {
            this._setValue();
        }
    }

    _render({statusField, url, value}) {
        return html`
   <div>
   <label>NAME:</label>
   ${statusField ? html`
     <label>Type:</label>
     <select class="statusField" on-change="${e => this.value.status = e.target.value}">
         <option value="active">Active</option>
         <option value="suspended">Suspended</option>
         <option value="inactive">Inactive</option>
     </select>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-status', FhirLocationStatus);