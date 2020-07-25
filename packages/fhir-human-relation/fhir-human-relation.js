/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-relation>` adds Type of relation, name gender, address and contact to the page.
 * It uses select and other reusable components like fhir-human-name, fhir-human-address, fhir-human-contact.
 * In typical use, just use `<fhir-human-relation url=""></fhir-human-relation>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-relation.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@polymer/iron-ajax/iron-ajax.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@lh-toolkit/fhir-human-name/fhir-human-name.js';
import '@lh-toolkit/fhir-human-gender/fhir-human-gender.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';


class FhirHumanRelation extends LitElement {
    static get properties() {
        return {
            /**relationType is used to show type of relationship. Use this property to show/hide. Default: true */
            relationType: {type: String},
            /**nameField is used to show name of person. Use this property to show/hide. Default: true */
            nameField:  {type: String},
            /**genderField is used to show gender of person. Use this property to show/hide. Default: true */
            genderField:  {type: String},
            /**addressField is used to show address of relation. Use this property to show/hide. Default: true */
            addressField:  {type: String},
            /**contactField is used to show telecom details. Use this property to show/hide. Default: true */
            contactField:  {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url:  {type: String},
            /**value is used to take the input value of each field*/
            value:  {type: Object}
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
        /**this.value contains an array which has been initialized as blank for the purpose of re-usability of components like fhir-human-name, fhir-human-address , fhir-human-contact*/
        this.value = [{relationship:[{coding:[{}]}],name: { given: []}, telecom: [{}], address: {line: []}}];
    }

    /**updated() delivers only after render*/
    updated() {
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

    render() {
        if (typeof(this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
    <div id="relationDiv">
    <mwc-formfield label = "CONTACT PERSON DETAILS:"></mwc-formfield><br><br>
    ${this.relationType !== 'false' ? html`${i.relationship.map((i, index) => html`
     <mwc-select label = "Relation" class="relationType" value="${i.coding[0].code}" @change="${e => this.value[index].code = e.target.value}">
            <mwc-list-item value="BP">Billing Contact Person</mwc-list-item>
            <mwc-list-item value="C">Emergency Contact</mwc-list-item>
            <mwc-list-item value="CP">Contact Person</mwc-list-item>
            <mwc-list-item value="E">Employer</mwc-list-item>
            <mwc-list-item value="EP">Emergency Contact Person</mwc-list-item>
            <mwc-list-item value="F">Federal Agency</mwc-list-item>
            <mwc-list-item value="I">Insurance Company</mwc-list-item>
            <mwc-list-item value="N">Next-Of-Kin</mwc-list-item>
            <mwc-list-item value="O">Other</mwc-list-item>
            <mwc-list-item value="PR">Person Preparing Referral</mwc-list-item>
            <mwc-list-item value="S">State Agency</mwc-list-item>
            <mwc-list-item value="U">Unknown</mwc-list-item>
            </mwc-select> `)}` : ''}
    ${this.nameField !== 'false' ? html`<fhir-human-name useField="false" .value="${[i.name]}" @change="${e => this.value[index].name = e.target.value}"></fhir-human-name>` : ''}
    ${this.genderField !== 'false' ? html`<fhir-human-gender .value="${i.gender}" @change="${e => this.value[index].gender = e.target.value}"></fhir-human-gender>` : ''}
    ${this.addressField !== 'false' ? html`<fhir-human-address .value="${[i.address]}" @change="${e => this.value[index].address = e.target.value}"></fhir-human-address>` : ''}
    ${this.contactField !== 'false' ? html`<fhir-human-contact .value="${i.telecom}" @change="${e => this.value[index].telecom = e.target.value}"></fhir-human-contact>` : ''}
     </div>   
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `)}`;
    }
}

window.customElements.define('fhir-human-relation', FhirHumanRelation);
