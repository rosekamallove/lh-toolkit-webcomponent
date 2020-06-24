/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-certification>` adds selection of qualification and identifier of qualification to the page.
 * The list fo qualifications is hard coded from given example on FHIR-Maturity level 3
 * Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-human-certification url=""></fhir-human-certification>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-certification.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';

class FhirHumanCertification extends LitElement {
    /**function to check if object is undefined. If undefined show blank else returns obj value*/
    static undefinedToBlank(obj) {
        if (obj == undefined) {
            return '';
        }
        else {
            return obj;
        }
    }

    static get properties() {
        return {
            /**systemIdentifier displays identifier of certification. Use this property to show/hide. Default: true */
            systemIdentifier: { type: String },
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Array }
        }
    }

    constructor() {
        super();
        this.systemIdentifier = 'true';
        this.periodField = 'true';
        this.value = [{ identifier: [{}], code: { coding: [{}] } }];
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var certification = this.parentNode.host;
            if (e.detail.response.qualification !== undefined) {
                certification.value = e.detail.response.qualification;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#humanNameDiv'));
            }
        });
    }

    render() {

        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
   <div id="humanNameDiv">
     <mwc-formfield label ="QUALIFICATION:" alignEnd>
     ${this.qualificationSelect !== 'false' ? html`
     <mwc-select   label ="Use" class="qualificationSelect" value="${i.code.coding[0].code}"  @change="${e => this.value[index].code.coding[0].code = e.target.value}">
         <mwc-list-item ></mwc-list-item>
         <mwc-list-item value="AA">Associate of Arts</mwc-list-item>
         <mwc-list-item value="ABS">Associate of Applied Science</mwc-list-item>
         <mwc-list-item value="ABA">Associate of Business Administration</mwc-list-item>
         <mwc-list-item value="AS">Associate of Science</mwc-list-item>
         <mwc-list-item value="BA">Bachelor of Arts</mwc-list-item>
         <mwc-list-item value="BBA">Bachelor of Business Administration</mwc-list-item>
         <mwc-list-item value="BN">Bachelor of Nursing</mwc-list-item>
         <mwc-list-item value="BS">Bachelor of Science</mwc-list-item>
         <mwc-list-item value="BSL">Bachelor of Science - Law</mwc-list-item>
         <mwc-list-item value="BSN">Bachelor of Science - Law</mwc-list-item>
         <mwc-list-item value="BT">Bachelor of Theology</mwc-list-item>
         <mwc-list-item value="CANP">Certified Adult Nurse Practitioner</mwc-list-item>
         <mwc-list-item value="CER">Certificate</mwc-list-item>
         <mwc-list-item value="CNA">Certified Medical Assistant</mwc-list-item>
         <mwc-list-item value="CNM">Certified Nurse Midwife</mwc-list-item>
         <mwc-list-item value="CNP">Certified Nurse Practitioner</mwc-list-item>
         <mwc-list-item value="CNS">Certified Nurse Specialist</mwc-list-item>
         <mwc-list-item value="CPNP">Certified Pediatric Nurse Practitioner</mwc-list-item>
         <mwc-list-item value="CRN">Certified Registered Nurse</mwc-list-item>
         <mwc-list-item value="CTR">Certified Tumor Registrar</mwc-list-item>
         <mwc-list-item value="DBA">Doctor of Business Administration</mwc-list-item>
         <mwc-list-item value="DED">Doctor of Education</mwc-list-item>
         <mwc-list-item value="DIP">Diploma</mwc-list-item>
         <mwc-list-item value="DO">Doctor of Osteopathy</mwc-list-item>
         <mwc-list-item value="EMT">Emergency Medical Technician</mwc-list-item>
         <mwc-list-item value="EMTP">Emergency Medical Technician - Paramedic	</mwc-list-item>
         <mwc-list-item value="FPNP">Family Practice Nurse Practitioner</mwc-list-item>
         <mwc-list-item value="HS">High School Graduate</mwc-list-item>
         <mwc-list-item value="JD">Juris Doctor</mwc-list-item>
         <mwc-list-item value="MA">A	Master of Arts</mwc-list-item>
         <mwc-list-item value="MS">Master of Science</mwc-list-item>
         <mwc-list-item value="MSN">Master of Science - Nursing</mwc-list-item>
         <mwc-list-item value="MT">Medical Technician</mwc-list-item>
         <mwc-list-item value="MTH">Master of Theology</mwc-list-item>
         <mwc-list-item value="NP">Nurse Practitioner</mwc-list-item>
         <mwc-list-item value="PA">Physicain Assistant</mwc-list-item>
         <mwc-list-item value="PharmD">PharmD	Doctor of Pharmacy</mwc-list-item>
         <mwc-list-item value="RMA">Registered Medical Assistant</mwc-list-item>
         <mwc-list-item value="RN">Registered Nurse</mwc-list-item>
         <mwc-list-item value="RPH">Registered Pharmacist</mwc-list-item>
         <mwc-list-item value="MMG">Medico di Medicina Generale</mwc-list-item>
     </mwc-select>` : ''}
     ${this.systemIdentifier !== 'false' ? html`<fhir-person-identifier useField="false" periodField="false" .value="${i.identifier}" @input="${e => this.value[index].identifier = e.target._input.value}"></fhir-person-identifier>` : ''}     
     </mwc-formfield> 
    </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `)}`;
    }
}


window.customElements.define('fhir-human-certification', FhirHumanCertification);
