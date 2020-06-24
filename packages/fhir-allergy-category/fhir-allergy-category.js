/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-category>` adds category of allergy to page. Uses select to choose options.
 * It is a code concept in FHIR and hence hard-coded into the pattern.
 * In typical use, just use `<fhir-allergy-category url=""></fhir-allergy-category>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-category.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**converts between json and string attributes */
const jsonStringConverter = {
    toAttribute(val) {
        return JSON.parse(val);
    },
    fromAttribute(str) {
        return JSON.stringify(str);
    }
}
class FhirAllergyCategory extends LitElement {
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

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergyCat = this.parentNode.host;
            if (e.detail.response.category !== undefined) {
                allergyCat.value = e.detail.response.category;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
        <div id="allergyDiv">
        ${this.typeField !== 'false' ?
                html`
        <label>Category:</label>
        <mwc-select outlined  class="typeField" value ="${this.value}" @change="${e => this.value = e.target.value}">
        <mwc-list-item value="biological">Biological</mwc-list-item>
        <mwc-list-item value="food">Food</mwc-list-item>
        <mwc-list-item value="medication">Medication</mwc-list-item>
        <mwc-list-item value="environment">Environment</mwc-list-item>
    </mwc-select>
         ` : ''}
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }

}


window.customElements.define('fhir-allergy-category', FhirAllergyCategory);