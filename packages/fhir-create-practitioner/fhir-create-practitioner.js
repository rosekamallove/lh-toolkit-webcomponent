/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-create-practitioner>` creates a form/page to create a new practitioner with all reusable components.
 * Uses fhir-components,mwc-button and iron-ajax.
 * In typical use, just use `<fhir-create-practitioner url=""></fhir-create-practitioner>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-create-practitioner.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-button/mwc-button.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-birth-date/fhir-birth-date.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';
import '@lh-toolkit/fhir-human-gender/fhir-human-gender.js';
import '@lh-toolkit/fhir-human-language/fhir-human-language.js';
import '@lh-toolkit/fhir-human-name/fhir-human-name.js';
import '@lh-toolkit/fhir-human-certification/fhir-human-certification.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirCreatePractitioner extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }

    _render({url}) {
        return html`
       <fhir-human-name id="practitionerName"></fhir-human-name>
       <fhir-human-certification id="practitionerCertification"></fhir-human-certification>
       <fhir-active-status id="practitionerActive"></fhir-active-status>
       <fhir-birth-date id="practitionerBirthday"></fhir-birth-date>
       <fhir-human-gender id="practitionerGender"></fhir-human-gender>
       <fhir-human-contact id="practitionerContact"></fhir-human-contact>
       <fhir-human-address id="practitionerAddress"></fhir-human-address>
       <fhir-human-language id="practitionerLanguage"></fhir-human-language>
       <mwc-button id="button" raised on-click=${() => this.doPost()}>Submit</mwc-button>
       <iron-ajax bubbles method ="POST" id="ajax" url="${url}" on-response="handleResponse"></iron-ajax>
    `;
    }
    doPost(){
        var pname = this.shadowRoot.getElementById('practitionerName').value;
        var pcertification = this.shadowRoot.getElementById('practitionerCertification').value;
        var pstatus = this.shadowRoot.getElementById('practitionerActive').value;
        var pbirth = this.shadowRoot.getElementById('practitionerBirthday').value;
        var pgender = this.shadowRoot.getElementById('practitionerGender').value;
        var pcontact = this.shadowRoot.getElementById('practitionerContact').value;
        var paddress = this.shadowRoot.getElementById('practitionerAddress').value;
        var planguage= this.shadowRoot.getElementById('practitionerLanguage').value;

        this.shadowRoot.getElementById('ajax').contentType='application/json';
        this.shadowRoot.getElementById('ajax').body = {"resourceType": "practitioner", "name": pname, "qualification" : pcertification,  "active" : pstatus, "birthDate" : pbirth, "gender" : pgender, "telecom" : pcontact, "address" : paddress, "communication" : planguage};
        this.shadowRoot.getElementById('ajax').generateRequest();

    }
}
window.customElements.define('fhir-create-practitioner', FhirCreatePractitioner);