/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-create-organisation>` creates a form/page to create a new organization with all reusable components.
 * Uses fhir-component, mwc-button and iron-ajax.
 * In typical use, just use `<fhirr-create-organisation url=""></fhirr-create-organisation>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhirr-create-organisation.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-button/mwc-button.js';
import '@lh-toolkit/fhir-organisation-name/fhir-organisation-name.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-organisation-type/fhir-organisation-type.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';
import '@lh-toolkit/fhir-organisation-contact/fhir-organisation-contact.js';

import '@polymer/iron-ajax/iron-ajax.js';

class FhirCreateOrganisation extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }

    _render({url}) {
        return html`
       <fhir-organisation-name id="organisationName"></fhir-organisation-name>
       <fhir-active-status id="organisationActive"></fhir-active-status>
       <fhir-organisation-type id="organisationtype"></fhir-organisation-type>
       <fhir-human-contact id="organisationtelecom"></fhir-human-contact>
       <fhir-human-address id="organisationAddress"></fhir-human-address>
       <b>CONTACT:</b><fhir-organisation-contact id="organisationContact"></fhir-organisation-contact>
       <mwc-button id="button" raised on-click=${() => this.doPost()}>Submit</mwc-button>
       <iron-ajax bubbles method ="POST" id="ajax" url="${url}" on-response="handleResponse"></iron-ajax>
    `;
    }
    doPost(){
        var pname = this.shadowRoot.getElementById('organisationName').value;
        var pstatus = this.shadowRoot.getElementById('organisationActive').value;
        var ptype = this.shadowRoot.getElementById('organisationtype').value;
        var ptelecom = this.shadowRoot.getElementById('organisationtelecom').value;
        var paddress = this.shadowRoot.getElementById('organisationAddress').value;
        var pcontact = this.shadowRoot.getElementById('organisationContact').value;

        this.shadowRoot.getElementById('ajax').contentType='application/json';
        this.shadowRoot.getElementById('ajax').body = {"resourceType": "organization", "name": pname,  "active" : pstatus, "type" : ptype,  "telecom" : ptelecom, "address" : paddress, "contact" : pcontact};
        this.shadowRoot.getElementById('ajax').generateRequest();

    }
}
window.customElements.define('fhir-create-organisation', FhirCreateOrganisation);