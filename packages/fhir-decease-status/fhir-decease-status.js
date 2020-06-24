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
import { LitElement, html } from 'lit-element';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirDeceaseStatus extends LitElement {
    static get properties() {
        return {
            /**deceaseStatus is used to show death status of person true or false. Use this property to show/hide. Default: true */
            deceaseStatus: { type: String },
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Boolean }
        }
    }

    constructor() {
        super();
        this.deceaseStatus = 'true';
        this.periodField = 'false';
        this.value = false;
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var active = this.parentNode.host;
            if (e.detail.response.deceasedBoolean) {
                active.shadowRoot.querySelector('.decease').checked = true;

            }
            else if (!e.detail.response.deceasedBoolean) {
                active.shadowRoot.querySelector('.decease').checked = false;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }

    render() {
        return html`
      <div id="div">
      ${this.deceaseStatus !== 'false' ? html`<mwc-formfield  class="deceaseStatus" alignEnd label="DECEASED STATUS:">
      <mwc-checkbox class ="decease" ?checked="${this.value}" @click="${e => this.value = e.target.value}"></mwc-checkbox>
      </mwc-formfield>` : ''}
      ${this.periodField !== 'false' ? html`<fhir-period class="periodField"></fhir-period>` : ''}  
      </div>   
      <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax> 
`;
    }
}

window.customElements.define('fhir-decease-status', FhirDeceaseStatus);
