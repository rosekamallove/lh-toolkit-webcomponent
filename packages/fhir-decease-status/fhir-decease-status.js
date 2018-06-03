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
            url: String
        }
    }

    constructor() {
        super();
        this.deceaseStatus = true;
        this.periodField = false;
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.active != undefined) {
                if (e.detail.response.active == true) {
                    e.target.parentNode.getElementById('decease').checked = true;
                }
                else if (e.detail.response.active == false) {
                    e.target.parentNode.getElementById('decease').checked = false;
                }
            }
            else if (e.detail.response.active == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({deceaseStatus, periodField, url}) {
        return html`
      ${deceaseStatus ? html`<mwc-formfield class="deceaseStatus" alignEnd label="DECEASED STATUS:">
         <mwc-checkbox id="decease" value = "true"></mwc-checkbox>
      </mwc-formfield>` : ''}
      ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}     
          <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax> 
`;
    }
}
window.customElements.define('fhir-decease-status', FhirDeceaseStatus);
