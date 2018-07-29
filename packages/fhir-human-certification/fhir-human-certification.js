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
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
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
            systemIdentifier: String,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.systemIdentifier = 'true';
        this.periodField = 'true';
        this.value = [{identifier: [{}],code: {coding: [{}]}}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
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

    _render({qualificationSelect, qualificationIdentifier, systemIdentifier, periodField, url, value}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
   <div id="humanNameDiv">
     <label>Qualification</label><br>
     ${qualificationSelect !== 'false' ? html`
     Use:<select class="qualificationSelect" value="${i.code.coding[0].code}"  on-change="${e => this.value[index].code = e.target.value}">
         <option value="AA">Associate of Arts</option>
         <option value="ABS">Associate of Applied Science</option>
         <option value="ABA">Associate of Business Administration</option>
         <option value="AS">Associate of Science</option>
         <option value="BA">Bachelor of Arts</option>
         <option value="BBA">Bachelor of Business Administration</option>
         <option value="BN">Bachelor of Nursing</option>
         <option value="BS">Bachelor of Science</option>
         <option value="BSL">Bachelor of Science - Law</option>
         <option value="BSN">Bachelor of Science - Law</option>
         <option value="BT">Bachelor of Theology</option>
         <option value="CANP">Certified Adult Nurse Practitioner</option>
         <option value="CER">Certificate</option>
         <option value="CNA">Certified Medical Assistant</option>
         <option value="CNM">Certified Nurse Midwife</option>
         <option value="CNP">Certified Nurse Practitioner</option>
         <option value="CNS">Certified Nurse Specialist</option>
         <option value="CPNP">Certified Pediatric Nurse Practitioner</option>
         <option value="CRN">Certified Registered Nurse</option>
         <option value="CTR">Certified Tumor Registrar</option>
         <option value="DBA">Doctor of Business Administration</option>
         <option value="DED">Doctor of Education</option>
         <option value="DIP">Diploma</option>
         <option value="DO">Doctor of Osteopathy</option>
         <option value="EMT">Emergency Medical Technician</option>
         <option value="EMTP">Emergency Medical Technician - Paramedic	</option>
         <option value="FPNP">Family Practice Nurse Practitioner</option>
         <option value="HS">High School Graduate</option>
         <option value="JD">Juris Doctor</option>
         <option value="MA">A	Master of Arts</option>
         <option value="MS">Master of Science</option>
         <option value="MSN">Master of Science - Nursing</option>
         <option value="MT">Medical Technician</option>
         <option value="MTH">Master of Theology</option>
         <option value="NP">Nurse Practitioner</option>
         <option value="PA">Physicain Assistant</option>
         <option value="PharmD">PharmD	Doctor of Pharmacy</option>
         <option value="RMA">Registered Medical Assistant</option>
         <option value="RN">Registered Nurse</option>
         <option value="RPH">Registered Pharmacist</option>
         <option value="MMG">Medico di Medicina Generale</option>
     </select>` : ''}
     ${systemIdentifier !== 'false' ? html`<fhir-person-identifier useField="false" periodField="true" value="${i.identifier}" on-input="${e => this.value[index].identifier = e.target._input.value}"></fhir-person-identifier>` : ''}       
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `)}`;
    }
}


window.customElements.define('fhir-human-certification', FhirHumanCertification);
