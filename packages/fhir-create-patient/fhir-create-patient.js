/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-create-patient>` creates a form/page to create a new patient with all reusable components like fhir-active-status,
 * fhir-birth-date, fhir-decease-status, fhir-human-address, fhir-human-contact, human-gender, fhir-human-language, fhir-human-name,
 * fhir-human-relation, fhir-marital-status. It also uses iron-ajax and mwc-button.
 * In typical use, just use `<fhir-create-patient url=""></fhir-create-patient>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-create-patient.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-button/mwc-button.js';
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

class FhirCreatePatient extends LitElement {

    static get properties() {
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }

    _render({url}) {
        return html`
       <fhir-human-name id="patientName"></fhir-human-name>
       <fhir-active-status id="patientActive"></fhir-active-status>
       <fhir-decease-status id="patientDecease"></fhir-decease-status>
       <fhir-birth-date id="patientBirthday"></fhir-birth-date>
       <fhir-human-gender id="patientGender"></fhir-human-gender>
       <fhir-marital-status id="patientMarriage"></fhir-marital-status>
       <fhir-human-contact id="patientContact"></fhir-human-contact>
       <fhir-human-address id="patientAddress"></fhir-human-address>
       <fhir-human-language id="patientLanguage"></fhir-human-language>
       <fhir-human-relation id="patientRelation"></fhir-human-relation>
       <mwc-button id="button" raised on-click=${() => this.doPost()}>Submit</mwc-button>
       <iron-ajax bubbles method ="POST" id="ajax" url="${url}" on-response="handleResponse"></iron-ajax>
    `;
    }

    doPost() {
        var pname = this.shadowRoot.getElementById('patientName').value;
        var pstatus = this.shadowRoot.getElementById('patientActive').value;
        var pdecease = this.shadowRoot.getElementById('patientDecease').value;
        var pbirth = this.shadowRoot.getElementById('patientBirthday').value;
        var pgender = this.shadowRoot.getElementById('patientGender').value;
        var pmarriage = this.shadowRoot.getElementById('patientMarriage').value;
        var pcontact = this.shadowRoot.getElementById('patientContact').value;
        var paddress = this.shadowRoot.getElementById('patientAddress').value;
        var planguage = this.shadowRoot.getElementById('patientLanguage').value;
        var prelation = this.shadowRoot.getElementById('patientRelation').value;
        this.shadowRoot.getElementById('ajax').contentType = 'application/json';
        this.shadowRoot.getElementById('ajax').body = {
            "resourceType": "Patient",
            "name": pname,
            "active": pstatus,
            "deceased": pdecease,
            "birthDate": pbirth,
            "gender": pgender,
            "maritalStatus": pmarriage,
            "telecom": pcontact,
            "address": paddress,
            "contact": prelation,
            "communication": planguage
        };
        this.shadowRoot.getElementById('ajax').generateRequest();

    }
}

window.customElements.define('fhir-create-patient', FhirCreatePatient);