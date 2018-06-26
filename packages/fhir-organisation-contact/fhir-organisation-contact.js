/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-organisation-contact>` adds select option of purpose to page. Uses select and iron-ajax
 * In typical use, just use `<fhir-organisation contact url=""></fhir-organisation-contact>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-contact.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-human-name/fhir-human-name.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';


class FhirOrganisationContact extends LitElement {
    static get properties() {
        return {
            /**purposeField is to show purpose of contact. Use this property to show/hide. Default: true */
            purposeField: String,
            /**nameField is to show name of human for this org. Use this property to show/hide. Default: true */
            nameField: String,
            /**addressField is to address of contactable person. Use this property to show/hide. Default: true */
            addressField: String,
            /**contactField is to show telecom details of contact. Use this property to show/hide. Default: true */
            contactField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.purposeField = 'true';
        this.nameField = 'true';
        this.addressField = 'true';
        this.contactField = 'true';
        this.value = [{name: { given: []}, telecom: [{}], address: {line: []}}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
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
    _render({purposeField, url, value, nameField, addressField, contactField}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
    <div id="div">
     <label>IDENTIFIER:</label>
    ${purposeField !== 'false' ? html`
    Use:<select class="purposeField" value="${i.purpose}" on-change="${e => this.value[index].purpose = e.target.value}">
        <option value="BILL">Billing</option>
        <option value="ADMIN">Administrative</option>
        <option value="HR">Human Resource</option>
        <option value="PAYOR">Payor</option>
        <option value="PATINF">Patient</option>
        <option value="PRESS">Press</option>
    </select>` : ''}
    ${nameField !== 'false' ? html`<fhir-human-name value="${[i.name]}" on-change="${e => this.value[index].name = e.target._input.value}"></fhir-human-name>` : ''}
    ${addressField !== 'false' ? html`<fhir-human-address value="${[i.address]}" on-change="${e => this.value[index].address = e.target._input.value}"></fhir-human-address>` : ''}
    ${contactField !== 'false' ? html`<fhir-human-contact value="${i.telecom}" on-change="${e => this.value[index].telecom = e.target._input.value}"></fhir-human-contact>` : ''}
    </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `)}`;
    }
}


window.customElements.define('fhir-organisation-contact', FhirOrganisationContact);
