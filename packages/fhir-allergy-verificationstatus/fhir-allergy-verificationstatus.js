/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-verificationstatus>` adds verification status of allergy to page. Uses select to choose options.
 * In typical use, just use `<fhir-allergy-verificationstatus url=""></fhir-allergy-verificationstatus>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-verificationstatus.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-formfield';
import '@material/mwc-list/mwc-list-item';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

const jsonStringConverter = {
    toAttribute(val) {
        // convert the value to string so it can be used as an attribute value
        return JSON.stringify(val);
    },
    fromAttribute(str) {
        // convert the attribute value to a JS object to use it as a property
        return JSON.parse(str);
    }
}

class FhirAllergyVerificationstatus extends LitElement {
    static get properties() {
        return {
            /**typeField is a selectable option type of verification status of allergy. Use this property to show/hide. Default: true */
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
        this.value = {};
    }

    /**updated() delivers only after _render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            var allergyCat = this.parentNode.host;
            if (e.detail.response.verificationStatus !== undefined) {
                allergyCat.value = e.detail.response.verificationStatus;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
   <div>
   <mwc-formfield label ="VERIFICATION STATUS:" alignEnd>
   ${this.typeField !== 'false' ? html`
   <mwc-select outlined class="typeField" value="${this.value}" @change="${this.onChange}">
        <mwc-list-item value="confirmed">Confirmed</mwc-list-item>
        <mwc-list-item value="unconfirmed">Unconfirmed</mwc-list-item>
        <mwc-list-item value="refuted">Refuted</mwc-list-item>
        <mwc-list-item value="entered-in-error">Entered-in-error</mwc-list-item>
</mwc-select>
     ` : ''}
     </mwc-formfield>
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }

    onChange(e){
        this.value = e.target.value;
    }
}

window.customElements.define('fhir-allergy-verificationstatus', FhirAllergyVerificationstatus);