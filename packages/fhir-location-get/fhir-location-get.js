/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-get>` creates a form/page to display existing location with all reusable components.
 * It uses fhir-components and iron-ajax.
 * In typical use, just use `<fhir-location-get url=""></fhir-location-get>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-get.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-organisation-name/fhir-organisation-name.js';
import '@lh-toolkit/fhir-location-status/fhir-location-status.js';
import '@lh-toolkit/fhir-location-operationalstatus/fhir-location-operationalstatus.js';
import '@lh-toolkit/fhir-location-description/fhir-location-description.js';
import '@lh-toolkit/fhir-location-mode/fhir-location-mode.js';
import '@lh-toolkit/fhir-human-contact/fhir-human-contact.js';
import '@lh-toolkit/fhir-human-address/fhir-human-address.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationGet extends LitElement {

    static get properties(){
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**locationId is used to define location Id. Use this property to show/hide. Default: true */
            locationId: String,
            /**locationName is used to define location name. Use this property to show/hide. Default: true */
            locationName: String,
            /**locationstatus is used to define location status Use this property to show/hide. Default: true */
            locationstatus: String,
            /**locationoperation is used to define operational status of location. Use this property to show/hide. Default: true */
            locationoperation: String,
            /**lcationationdescribe is used to define description of location. Use this property to show/hide. Default: true */
            locationationdescribe: String,
            /**locationMode is used to define mode of location as instance or kind. Use this property to show/hide. Default: true */
            locationMode: String,
            /**locationContact is used to define telecom details of location. Use this property to show/hide. Default: true */
            locationContact: String,
            /**locationAddress is used to define address of location. Use this property to show/hide. Default: true */
            locationAddress: String,
            /**value defines the value of fields */
            value: Array

        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.locationId = 'true';
        this.locationName = 'true';
        this.locationstatus = 'true';
        this.locationoperation = 'true';
        this.locationationdescribe = 'true';
        this.locationMode = 'true';
        this.locationContact = 'true';
        this.locationAddress = 'true';
        this.value = [{}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            this.parentNode.host.value = e.detail.response;
        });
    }

    _render({url, locationId, locationName, locationstatus, locationoperation, locationationdescribe, locationMode, locationContact, locationAddress, value }) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`
       ${locationId !== 'false' ? html`<fhir-person-identifier value="${this.value.identifier}" id="locationId"></fhir-person-identifier>` : ''}
       ${locationName !== 'false' ? html`<fhir-organisation-name value="${this.value.name}" id="locationName"></fhir-organisation-name>` : ''}
       ${locationstatus !== 'false' ? html`<fhir-location-status value="${this.value.status}" id="locationstatus"></fhir-location-status>` : ''}
       ${locationoperation !== 'false' ? html`<fhir-location-operationalstatus value="${this.value.operationalStatus}" id="locationoperation"></fhir-location-operationalstatus>` : ''}
       ${locationationdescribe !== 'false' ? html`<fhir-location-description value="${this.value.description}" id="locationationdescribe"></fhir-location-description>` : ''}
       ${locationMode !== 'false' ? html`<fhir-location-mode value="${this.value.mode}" id="locationMode"></fhir-location-mode>` : ''}
       ${locationContact !== 'false' ? html`<fhir-human-contact value="${this.value.telecom}" id="locationContact"></fhir-human-contact>` : ''}
       ${locationContact !== 'false' ? html`<fhir-human-address value="${this.value.address}" id="locationAddress"></fhir-human-address>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
  `;
    }
}
window.customElements.define('fhir-location-get', FhirLocationGet);