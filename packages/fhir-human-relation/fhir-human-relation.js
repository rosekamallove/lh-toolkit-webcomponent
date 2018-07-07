/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-relation>` adds Type of relation. Uses select
 * In typical use, just use `<fhir-human-relation url=""></fhir-human-relation>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-relation.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-human-name/fhir-human-name.js';
import '@lh-toolkit/fhir-human-gender/fhir-human-gender.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';

class FhirHumanRelation extends LitElement {
    static get properties() {
        return {
            /**relationType is used to show type of relationship. Use this property to show/hide. Default: true */
            relationType: String,
            nameField: String,
            genderField: String,
            addressField: String,
            contactField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.relationType = 'true';
        this.nameField = 'true';
        this.genderField = 'true';
        this.addressField = 'true';
        this.contactField = 'true';
        this.value = [{relationship:[{coding:[{}]}],name: { given: []}, telecom: [{}], address: {line: []}}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            var relationship = this.parentNode.host;
            if (e.detail.response.contact !== undefined) {
                relationship.value = e.detail.response.contact;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#relationDiv'));
            }
        });
    }

    _render({url, relationType, value, nameField, genderField, addressField, contactField}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
    <div id="relationDiv">
    <label>CONTACT PERSON DETAILS:</label><br> 
    ${relationType !== 'false' ? html`${i.relationship.map((i, index) => html`
     Relation:<select class="relationType" value="${i.coding[0].code}" on-change="${e => this.value[index].code = e.target.value}">
            <option value="BP">Billing Contact Person</option>
            <option value="C">Emergency Contact</option>
            <option value="CP">Contact Person</option>
            <option value="E">Employer</option>
            <option value="EP">Emergency Contact Person</option>
            <option value="F">Federal Agency</option>
            <option value="I">Insurance Company</option>
            <option value="N">Next-Of-Kin</option>
            <option value="O">Other</option>
            <option value="PR">Person Preparing Referral</option>
            <option value="S">State Agency</option>
            <option value="U">Unknown</option>
            </select> `)}` : ''}
    ${nameField !== 'false' ? html`<fhir-human-name useField="false" value="${[i.name]}" on-change="${e => this.value[index].name = e.target._input.value}"></fhir-human-name>` : ''}
    ${genderField !== 'false' ? html`<fhir-human-gender value="${i.gender}" on-change="${e => this.value[index].gender = e.target.value}"></fhir-human-gender>` : ''}
    ${addressField !== 'false' ? html`<fhir-human-address value="${[i.address]}" on-change="${e => this.value[index].address = e.target._input.value}"></fhir-human-address>` : ''}
    ${contactField !== 'false' ? html`<fhir-human-contact value="${i.telecom}" on-change="${e => this.value[index].telecom = e.target._input.value}"></fhir-human-contact>` : ''}
     </div>   
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `)}`;
    }
}

window.customElements.define('fhir-human-relation', FhirHumanRelation);
