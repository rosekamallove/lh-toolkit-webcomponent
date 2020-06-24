/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-patient-get>` creates a form/page to create show existing patient details with all reusable components.
 * Uses fhir components and iron-ajax.
 * In typical use, just use `<fhir-patient-get url=""></fhir-patient-get>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-patient-get.html
 *
 */
import {LitElement, html} from 'lit-element';
// import '@material/mwc-button/mwc-button.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-birth-date/fhir-birth-date.js';
import '@lh-toolkit/fhir-decease-status/fhir-decease-status.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';
import '@lh-toolkit/fhir-human-gender/fhir-human-gender.js';
import '@lh-toolkit/fhir-human-language/fhir-human-language.js';
import '@lh-toolkit/fhir-human-name/fhir-human-name.js';
import '@lh-toolkit/fhir-human-relation/fhir-human-relation.js';
import '@lh-toolkit/fhir-marital-status/fhir-marital-status.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirPatientGet extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**patientId defines the patient Id. Use this property to show/hide. Default: true */
            patientId: {type: String},
            /**patientName defines the patient Name. Use this property to show/hide. Default: true */
            patientName: {type: String},
            /**patientActive defines the patient active status. Use this property to show/hide. Default: true */
            patientActive: {type: String},
            /**patientDecease defines the patient deceased status. Use this property to show/hide. Default: true */
            patientDecease: {type: String},
            /**patientBirthday defines the patient date of birth. Use this property to show/hide. Default: true */
            patientBirthday: {type: String},
            /**patientGender defines the patient gender. Use this property to show/hide. Default: true */
            patientGender: {type: String},
            /**patientMarriage defines the patient marital status. Use this property to show/hide. Default: true */
            patientMarriage: {type: String},
            /**patientContact defines the patient telecom details. Use this property to show/hide. Default: true */
            patientContact: {type: String},
            /**patientAddress defines the patient address. Use this property to show/hide. Default: true */
            patientAddress: {type: String},
            /**patientLanguage defines the patient communication language. Use this property to show/hide. Default: true */
            patientLanguage: {type: String},
            /**relationType defines the patient relation details. Use this property to show/hide. Default: true */
            relationType: {type: String},
            /**value defines the value of field */
            value: {type: Object}

        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.relationType = 'true';
        this.patientId = 'true';
        this.patientName = 'true';
        this.patientActive = 'true';
        this.patientDecease = 'true';
        this.patientBirthday = 'true';
        this.patientGender = 'true';
        this.patientMarriage = 'true';
        this.patientContact = 'true';
        this.patientAddress = 'true';
        this.patientLanguage = 'true';
        this.value = {};
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            this.parentNode.host.value = e.detail.response;
        });
    }

    render() {
        if (typeof(this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`
       ${this.patientId !== 'false' ? html`<fhir-person-identifier .value="${this.value.identifier}" id="patientId"></fhir-person-identifier>` : ''}
       ${this.patientName !== 'false' ? html`<fhir-human-name .value="${this.value.name}" id="patientName"></fhir-human-name>` : ''}
       ${this.patientActive !== 'false' ? html`<fhir-active-status .value="${this.value.active}" id="patientActive"></fhir-active-status>` : ''}
       ${this.patientDecease !== 'false' ? html`<fhir-decease-status .value="${this.value.deceasedBoolean}" id="patientDecease"></fhir-decease-status>` : ''}
       ${this.patientBirthday !== 'false' ? html`<fhir-birth-date .value="${this.value.birthDate}" id="patientBirthday"></fhir-birth-date>` : ''}
       ${this.patientGender !== 'false' ? html`<fhir-human-gender .value="${this.value.gender}" id="patientGender"></fhir-human-gender>` : ''}
       ${this.patientMarriage !== 'false' ? html`<fhir-marital-status .value="${this.value.maritalStatus}" id="patientMarriage"></fhir-marital-status>` : ''}
       ${this.patientContact !== 'false' ? html`<fhir-human-contact .value="${this.value.telecom}" id="patientContact"></fhir-human-contact>` : ''}
       ${this.patientAddress !== 'false' ? html`<fhir-human-address .value="${this.value.address}" id="patientAddress"></fhir-human-address>` : ''}
       ${this.patientLanguage !== 'false' ? html`<fhir-human-language .value="${this.value.language}" id="patientLanguage"></fhir-human-language>` : ''}
       ${this.relationType !== 'false' ? html`<fhir-human-relation .value="${this.value.contact}" id="patientRelation"></fhir-human-relation>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
  `;
    }
}
window.customElements.define('fhir-patient-get', FhirPatientGet);