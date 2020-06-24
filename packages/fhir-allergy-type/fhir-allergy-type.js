/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-type>` adds type of allergy to page. Uses select to choose options.
 * In typical use, just use `<fhir-allergy-type url=""></fhir-allergy-type>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-type.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';


/**converts between json and string attributes */
const jsonStringConverter = {
    toAttribute(val) {
        return JSON.stringify(val);
    },
    fromAttribute(str) {
        return JSON.parse(str);
    }
};

class FhirAllergyType extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option type of allergy. Use this property to show/hide. Default: true */
            typeField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: jsonStringConverter, reflect: true }
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.typeField = 'true';
        this.value = [];
    }


    _setValue() {
        if (this.value.length != undefined) {
            this.shadowRoot.childNodes[1].querySelectorAll('.typeField')[0].value = this.value;
        }
    }

    /**updated() delivers only after _render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            var allergyCat = this.parentNode.host;
            if (e.detail.response.type !== undefined) {
                allergyCat.value = e.detail.response.type;
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
     <mwc-formfield label ="Type:" alignEnd>
    <mwc-select class="typeField" outlined  .value="${this.value}" @change="${e => this.value = e.target.value}">
     <mwc-list-item value="allergy">Allergy</mwc-list-item>
     <mwc-list-item value="intolerance">Intolerance</mwc-list-item>
    </mwc-select>
 </mwc-formfield>
     ` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}


window.customElements.define('fhir-allergy-type', FhirAllergyType);