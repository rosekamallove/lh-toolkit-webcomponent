/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location>` creates a form/page to create a new location with all reusable components.
 * Uses fhir-components, mwc-button and iron-ajax.
 * In typical use, just use `<fhir-location url=""></fhir-location>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-button/mwc-button.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-organisation-name/fhir-organisation-name.js';
import '@lh-toolkit/fhir-location-status/fhir-location-status.js';
import '@lh-toolkit/fhir-location-operationalstatus/fhir-location-operationalstatus.js';
import '@lh-toolkit/fhir-location-description/fhir-location-description.js';
import '@lh-toolkit/fhir-location-mode/fhir-location-mode.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirCreateLocation extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String}
        }
    }

    render() {
        return html`
       <fhir-organisation-name id="locationName"></fhir-organisation-name>
       <fhir-location-status id="locationStatus"></fhir-location-status>
       <fhir-location-operationalstatus id="locationOperation"></fhir-location-operationalstatus>
       <fhir-location-description id="locationDescription"></fhir-location-description>
       <fhir-location-mode id="locationMode"></fhir-location-mode>
       <fhir-human-contact id="locationtelecom"></fhir-human-contact>
       <fhir-human-address id="locationAddress"></fhir-human-address>
       <mwc-button id="button" raised @click=${() => this.doPost()}>Submit</mwc-button>
       <iron-ajax bubbles method ="POST" id="ajax" .url="${this.url}" on-response="handleResponse"></iron-ajax>
    `;
    }
    doPost(){
        var pname = this.shadowRoot.getElementById('locationName').value;
        var pstatus = this.shadowRoot.getElementById('locationStatus').value;
        var popt = this.shadowRoot.getElementById('locationOperation').value;
        var pdescribe = this.shadowRoot.getElementById('locationDescription').value;
        var pmode = this.shadowRoot.getElementById('locationMode').value;
        var paddress = this.shadowRoot.getElementById('locationAddress').value;
        var pcontact = this.shadowRoot.getElementById('locationtelecom').value;

        this.shadowRoot.getElementById('ajax').contentType='application/json';
        this.shadowRoot.getElementById('ajax').body = {"resourceType": "Location", "name": pname,  "status" : pstatus, "operationalStatus" : popt,  "description" : pdescribe, "mode" : pmode, "telecom" : pcontact, "address" : paddress};
        this.shadowRoot.getElementById('ajax').generateRequest();
    }
}
window.customElements.define('fhir-create-location', FhirCreateLocation);