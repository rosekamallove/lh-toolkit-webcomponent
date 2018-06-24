/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-decease-status>` adds checkbox to the page. Uses mwc-checkbox and iron-ajax
 * In typical use, just use `<fhir-decease-status url=""></fhir-decease-status>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-decease-status.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirDeceaseStatus extends LitElement {
    static get properties() {
        return {
            /**deceaseStatus is used to show death status of person true or false. Use this property to show/hide. Default: true */
            deceaseStatus: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    constructor() {
        super();
        this.deceaseStatus = true;
        this.periodField = false;
        this.value = {};
    }

    _setValue() {
        let data;

        if (typeof(this.value) == "string") {
            data = JSON.parse(this.value)
        }
        else {
            data = this.value;
        }
        if (typeof(data) == "object" && data.length != undefined) {
            if (data) {
                this.shadowRoot.getElementById('decease').checked = true;
            }
            else {
                this.shadowRoot.getElementById('decease').checked = false;
            }
        }
        else if (typeof(data) == "boolean" && data == true) {
            this.shadowRoot.getElementById('decease').checked = true;
        }
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.deceasedBoolean != undefined) {
                this.parentNode.host.value = e.detail.response.deceasedBoolean;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.deceasedBoolean == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({deceaseStatus, periodField, url, value}) {
        return html`
      ${deceaseStatus ? html`<mwc-formfield  class="deceaseStatus" alignEnd label="DECEASED STATUS:">
         <mwc-checkbox id="decease" value = "true" on-click="${e => this.value.deceasedBoolean = e.target.value}"></mwc-checkbox>
      </mwc-formfield>` : ''}
      ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}     
          <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax> 
`;
    }
}
window.customElements.define('fhir-decease-status', FhirDeceaseStatus);
