/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-organisation-get>` creates a form/page to display existing organization with all reusable components.
 * Uses fhir-components and iron-ajax.
 * In typical use, just use `<fhir-organisation-get url=""></fhir-organisation-get>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-get.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-organisation-name/fhir-organisation-name.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-organisation-type/fhir-organisation-type.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';
import '@lh-toolkit/fhir-organisation-contact/fhir-organisation-contact.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirOrganisationGet extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type :String},
            /**organisationId defines organization Id. Use this property to show/hide. Default: true */
            organisationId: {type :String},
            /**organisationName defines organization name. Use this property to show/hide. Default: true */
            organisationName: {type :String},
            /**organisationActive defines organization active status. Use this property to show/hide. Default: true */
            organisationActive: {type :String},
            /**organisationContact defines organization contact of person. Use this property to show/hide. Default: true */
            organisationContact: {type :String},
            /**organisationTelecom defines organization contact details. Use this property to show/hide. Default: true */
            organisationTelecom: {type :String},
            /**organisationAddress defines organization address. Use this property to show/hide. Default: true */
            organisationAddress: {type :String},
            /**organisationType defines organization type. Use this property to show/hide. Default: true */
            organisationType: {type :String},
            /**value defines value for the fields*/
            value: {type :Array}

        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.organisationId = 'true';
        this.organisationName = 'true';
        this.organisationActive = 'true';
        this.organisationContact = 'true';
        this.organisationTelecom = 'true';
        this.organisationAddress = 'true';
        this.organisationType = 'true';
        this.value = {};
    }

    /**_didRender() delivers only after _render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            this.parentNode.host.value = e.detail.response;
        });
    }

    render() {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`
       ${this.organisationId !== 'false' ? html`<fhir-person-identifier .value="${this.value.identifier}" id="organisationId"></fhir-person-identifier>` : ''}
       ${this.organisationName !== 'false' ? html`<fhir-organisation-name value="${this.value.name}" id="organisationName"></fhir-organisation-name>` : ''}
       ${this.organisationType !== 'false' ? html`<fhir-organisation-type .value="${this.value.type}" id="organisationType"></fhir-organisation-type>` : ''}
       ${this.organisationActive !== 'false' ? html`<fhir-active-status .value="${this.value.active}" id="organisationActive"></fhir-active-status>` : ''}
       ${this.organisationTelecom !== 'false' ? html`<fhir-human-contact .value="${this.value.telecom}" id="organisationTelecom"></fhir-human-contact>` : ''}
       ${this.organisationAddress !== 'false' ? html`<fhir-human-address .value="${this.value.address}" id="organisationAddress"></fhir-human-address>` : ''}
       ${this.organisationContact !== 'false' ? html`contact:<fhir-organisation-contact .value="${this.value.contact}" id="organisationContact"></fhir-organisation-contact>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
  `;
    }
}
window.customElements.define('fhir-organisation-get', FhirOrganisationGet);