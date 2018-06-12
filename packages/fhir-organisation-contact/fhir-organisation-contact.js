/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-organisation-contact>` adds select option for purpose of contact to page. Uses select and iron-ajax
 * In typical use, just use `<fhir-organisation contact url=""></fhir-organisation-contact>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-contact.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
class FhirOrganisationContact extends LitElement {
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
            /**purposeField is to show purpose of contact. Use this property to show/hide. Default: true */
            purposeField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.purposeField = true;
        this.value = [];
    }
    _setValue() {
        let data;
        if (typeof(this.value) == "string") {
            data = JSON.parse(this.value);
        } else {
            data = this.value;
        }
        if (data.length != undefined) {
            var i = 0;
            for (let contact of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    var child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.purposeField')[0].value = data[i].purpose;
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.contact != undefined) {
                this.parentNode.host.value = e.detail.response.contact;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.contact == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({purposeField, url, value}) {
        return html`
<div>
<label>IDENTIFIER:</label>
    ${purposeField ? html`
    Use:<select class="purposeField" on-change="${e => this.value.purpose = e.target.value}">
        <option value="BILL">Billing</option>
        <option value="ADMIN">Administrative</option>
        <option value="HR">Human Resource</option>
        <option value="PAYOR">Payor</option>
        <option value="PATINF">Patient</option>
        <option value="PRESS">Press</option>
    </select>` : ''}
</div>
<iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-organisation-contact', FhirOrganisationContact);
