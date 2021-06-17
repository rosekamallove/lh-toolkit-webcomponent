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

import {LitElement,html} from 'lit-element'
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@polymer/iron-ajax/iron-ajax.js';

class FhirActiveStatus extends LitElement {
    static get properties() {
        return {
            /**activeStatus is used to show active status of person true or false. Use this property to show/hide. Default: true */
            activeStatus: {type:String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type:String},
            /**value is used to take the input value of each field*/
            value: {type:Boolean, reflect: true}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.activeStatus = "true";
        this.value = false;
        
    }


    /**updated() delivers only after render*/
    updated() {
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

     
    render() {
        return html`
       <div id="activeDiv">
       ${this.activeStatus !== "false" ? 
       html`<mwc-formfield class="activeStatus" alignEnd label="Active-Status:">
         <mwc-checkbox id="active" ?checked ="${this.value}" class="activeState" @click ="${e => this.value = !e.target.checked}"></mwc-checkbox>
         </mwc-formfield>` : ''}
       </div>
       <iron-ajax id= "ajax" bubbles auto handle-as="json" .url="${this.url}"> </iron-ajax>

    `;
    }
}

window.customElements.define('fhir-active-status', FhirActiveStatus);