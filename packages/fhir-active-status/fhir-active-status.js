/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-active-status>` adds checkbox to the page. Uses mwc-checkbox and iron-ajax
 * In typical use, just use `<fhir-active-status url=""></fhir-active-status>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-active-status.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@polymer/iron-ajax/iron-ajax.js';

class FhirActiveStatus extends LitElement {
    static get properties() {
        return {
            /**activeStatus is used to show status of person true or false. Use this property to show/hide. Default: true */
            activeStatus: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.activeStatus = true;
    }
    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            if (e.detail.response.active != undefined) {
                if (e.detail.response.active == true) {
                    e.target.parentNode.getElementById('active').checked = true;
                }
                else if (e.detail.response.active == false) {
                    e.target.parentNode.getElementById('active').checked = false;
                }
            }
            else if (e.detail.response.active == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({activeStatus, url}) {
        return html`
       ${activeStatus ? html`<mwc-formfield class="activeStatus" alignEnd label="ACTIVE STATUS:">
         <mwc-checkbox id="active" class="activeState"></mwc-checkbox>
         </mwc-formfield>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}
window.customElements.define('fhir-active-status', FhirActiveStatus);