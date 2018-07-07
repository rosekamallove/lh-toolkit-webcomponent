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
            /**activeStatus is used to show active status of person true or false. Use this property to show/hide. Default: true */
            activeStatus: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Boolean
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.activeStatus = 'true';
        this.value = false;
    }


    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var active = this.parentNode.host;
            if (e.detail.response.active) {
                active.shadowRoot.querySelector('.activeState').checked = true;

            }
            else if (!e.detail.response.active) {
                active.shadowRoot.querySelector('.activeState').checked = false;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#activeDiv'));
            }
        });
    }

    _render({activeStatus, url, value}) {
        return html`
       <div id="activeDiv">
       ${activeStatus !== 'false' ? html`<mwc-formfield class="activeStatus" alignEnd label="ACTIVE STATUS:">
         <mwc-checkbox id="active" checked="${this.value}" class="activeState" on-click="${e => this.value = e.target.value}"></mwc-checkbox>
         </mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-active-status', FhirActiveStatus);