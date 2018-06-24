/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-certification>` adds select option of qualification, system identifier for that qualification and identifier value for that qualification with validity dates. Uses mwc-textfield and iron-ajax
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
            /**useSelect is a selectable option for use of address. Use this property to show/hide. Default: true */
            qualificationSelect: Boolean,
            /**add1Field is used to display address line 1. Use this property to show/hide. Default: true */
            qualificationIdentifier: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,

            systemIdentifier: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.qualificationSelect = true;
        this.qualificationIdentifier = true;
        this.systemIdentifier = true
        this.periodField = true;
        this.value = [];
    }

    _setValue() {
        let data;
        if (typeof(this.value) == "string") {
            data = JSON.parse(this.value);
        } else {
            data = this.value;
        }
        if (data.length != 0) {
            var i = 0;
            for (let qualification of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    var child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.qualificationSelect')[0].value = data[0].code.coding[i].code;
                child.querySelectorAll('.systemIdentifier')[0].value = FhirHumanCertification.undefinedToBlank(data[0].identifier[i].system);
                child.querySelectorAll('.qualificationIdentifier')[0].value = FhirHumanCertification.undefinedToBlank(data[0].identifier[i].value);
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.qualification != undefined) {
                this.parentNode.host.value = e.detail.response.qualification;
                this.parentNode.host._setValue();

            }
            else if (e.detail.response.address == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({qualificationSelect, qualificationIdentifier, systemIdentifier, periodField, url, value}) {
        return html`
     <div> 
     <label>Qualification</label><br>
     ${qualificationSelect ? html`
     Use:<select class="qualificationSelect" on-change="${e => this.value.code = e.target.value}">
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
     ${systemIdentifier ? html`<mwc-textfield outlined class="systemIdentifier" label="System Identifier:" on-input="${e => this.value.system = e.target._input.value}"></mwc-textfield>` : ''}
     ${qualificationIdentifier ? html`<mwc-textfield outlined class="qualificationIdentifier" label="Qualification Identifier:" on-input="${e => this.value.value = e.target._input.value}" ></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
`;
    }
}

window.customElements.define('fhir-human-certification', FhirHumanCertification);