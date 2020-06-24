/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-organisation-contact>` adds select option of purpose to page along with name address and contact details.
 * Uses select and iron-ajax
 * In typical use, just use `<fhir-organisation contact url=""></fhir-organisation-contact>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-contact.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@polymer/iron-ajax/iron-ajax.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@lh-toolkit/fhir-human-name/fhir-human-name.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';


class FhirOrganisationContact extends LitElement {
    static get properties() {
        return {
            /**purposeField is to show purpose of contact. Use this property to show/hide. Default: true */
            purposeField: { type: String },
            /**nameField is to show name of human for this org. Use this property to show/hide. Default: true */
            nameField: { type: String },
            /**addressField is to address of contactable person. Use this property to show/hide. Default: true */
            addressField: { type: String },
            /**contactField is to show telecom details of contact. Use this property to show/hide. Default: true */
            contactField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Array }
        }
    }

    constructor() {
        super();
        this.purposeField = 'true';
        this.nameField = 'true';
        this.addressField = 'true';
        this.contactField = 'true';
        /**this.value contains an array which has been initialized as blank for the purpose of re-usability of components like fhir-human-name, fhir-human-address , fhir-human-contact*/
        this.value = [{ name: { given: [] }, telecom: [{}], address: { line: [] } }];
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            var relationship = this.parentNode.host;
            if (e.detail.response.contact !== undefined) {
                relationship.value = e.detail.response.contact;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }
    render() {
        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
    <div id="div">
    ${this.purposeField !== 'false' ? html`
    <mwc-formfield label ="IDENTIFIER:" alignEnd>
    <mwc-select label="Use" class="purposeField" .value="${i.purpose}" @change="${e => this.value[index].purpose = e.target.value}">
        <mwc-list-item value="BILL">Billing</mwc-list-item>
        <mwc-list-item value="ADMIN">Administrative</mwc-list-item>
        <mwc-list-item value="HR">Human Resource</mwc-list-item>
        <mwc-list-item value="PAYOR">Payor</mwc-list-item>
        <mwc-list-item value="PATINF">Patient</mwc-list-item>
        <mwc-list-item value="PRESS">Press</mwc-list-item>
    </mwc-select>
    </mwc-formfield>` : ''}
    ${this.nameField !== 'false' ? html`<fhir-human-name .value="${[i.name]}" @change="${e => this.value[index].name = e.target._input.value}"></fhir-human-name>` : ''}
    ${this.addressField !== 'false' ? html`<fhir-human-address .value="${[i.address]}" @change="${e => this.value[index].address = e.target._input.value}"></fhir-human-address>` : ''}
    ${this.contactField !== 'false' ? html`<fhir-human-contact .value="${i.telecom}" @change="${e => this.value[index].telecom = e.target._input.value}"></fhir-human-contact>` : ''}
    </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `)}`;
    }
}


window.customElements.define('fhir-organisation-contact', FhirOrganisationContact);
