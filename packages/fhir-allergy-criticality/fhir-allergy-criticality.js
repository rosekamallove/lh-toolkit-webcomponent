/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-criticallity>` adds critically of allergy to page to select from code if the critical nature of occurrence was low/moderate/high.
 * Uses select to choose options.
 * In typical use, just use `<fhir-allergy-criticallity url=""></fhir-allergy-criticallity>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-criticallity.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

class FhirAllergyCriticality extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option critical nature of allergy. Use this property to show/hide. Default: true */
            typeField:{type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url:{type: String},
            /**value is used to take the input value of each field*/
            value:{type: String}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.typeField = 'true';
        
       
    }

    /**updated() delivers only after render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            var allergyCat = this.parentNode.host;
            if (e.detail.response.criticality !== undefined) {
                allergyCat.value = e.detail.response.criticality;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
   <div id="allergyDiv">
   ${this.typeField !== 'false' ? html`
     <label>Critical Nature:</label>
     <mwc-select outlined label="Critical Nature" class="typeField" .value="${this.value}" @change="${e => this.value = e.target.value}">
        <mwc-list-item ></mwc-list-item>
        <mwc-list-item value="low">Low</mwc-list-item>
        <mwc-list-item value="high">High</mwc-list-item>
        <mwc-list-item value="unable to assess">Unable-to-assess</mwc-list-item>
    </mwc-select>`: ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-allergy-criticality', FhirAllergyCriticality);