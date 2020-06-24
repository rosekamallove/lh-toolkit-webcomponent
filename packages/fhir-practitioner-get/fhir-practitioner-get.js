/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-practitioner-get>` creates a form/page to display existing practitioner with all reusable components.
 * Uses reusable fhir components
 * In typical use, just use `<fhir-practitioner-get url=""></fhir-practitioner-get>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-practitioner-get.html
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

class FhirPractitionerGet extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**practitionerName defines practitioner name. Use this property to show/hide. Default: true */
            practitionerName: {type: String},
            /**practitionerActive defines practitioner active status. Use this property to show/hide. Default: true */
            practitionerActive: {type: String},
            /**practitionerQualification defines practitioner qualification. Use this property to show/hide. Default: true */
            practitionerQualification: {type: String},
            /**practitionerBirthday defines practitioner date of birth. Use this property to show/hide. Default: true */
            practitionerBirthday: {type: String},
            /**practitionerGender defines practitioner gender. Use this property to show/hide. Default: true */
            practitionerGender: {type: String},
            /**practitionerContact defines practitioner telecom details. Use this property to show/hide. Default: true */
            practitionerContact: {type: String},
            /**practitionerAddress defines practitioner address. Use this property to show/hide. Default: true */
            practitionerAddress: {type: String},
            /**practitionerLanguage defines practitioner communication language. Use this property to show/hide. Default: true */
            practitionerLanguage: {type: String},
            /**value is a used to define value of fields */
            value: Array

        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.practitionerName = 'true';
        this.practitionerQualification = 'true';
        this.practitionerActive = 'true';
        this.practitionerBirthday = 'true';
        this.practitionerGender = 'true';
        this.practitionerContact = 'true';
        this.practitionerAddress = 'true';
        this.practitionerLanguage = 'true';
        this.value = {};
    }

    /**_didRender() delivers only after _render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            this.parentNode.host.value = e.detail.response;
        });
    }

    render() {
        if (typeof(this.value) == "string") {
            this.value = JSON.parse(this.value);
            console.log(this.value)
        }
        return html`
       ${this.practitionerName !== 'false' ? html`<fhir-human-name .value="${this.value.name}" id="practitionerName"></fhir-human-name>` : ''}
       ${this.practitionerQualification !== 'false' ? html`<fhir-human-certification .value="${this.value.name}" id="practitionerQualification"></fhir-human-certification>` : ''}
       ${this.practitionerActive !== 'false' ? html`<fhir-active-status .value="${this.value.active}" id="practitionerActive"></fhir-active-status>` : ''}
       ${this.practitionerBirthday !== 'false' ? html`<fhir-birth-date .value="${this.value.birthDate}" id="practitionerBirthday"></fhir-birth-date>` : ''}
       ${this.practitionerGender !== 'false' ? html`<fhir-human-gender .value="${this.value.gender}" id="practitionerGender"></fhir-human-gender>` : ''}
       ${this.practitionerContact !== 'false' ? html`<fhir-human-contact .value="${this.value.telecom}" id="practitionerContact"></fhir-human-contact>` : ''}
       ${this.practitionerAddress !== 'false' ? html`<fhir-human-address .value="${this.value.address}" id="practitionerAddress"></fhir-human-address>` : ''}
       ${this.practitionerLanguage !== 'false' ? html`<fhir-human-language .value="${this.value.language}" id="practitionerLanguage"></fhir-human-language>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
  `;
    }
}
window.customElements.define('fhir-practitioner-get', FhirPractitionerGet);