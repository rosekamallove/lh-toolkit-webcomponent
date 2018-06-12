/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-birth-date>` adds input date to the page. Uses input tupe date in mm/dd/yyyy format
 * In typical use, just use `<fhir-birth-date url=""></fhir-birth-date>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-birth-date.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import moment from 'moment';

class FhirBirthDate extends LitElement {
    static get properties() {
        return {
            /**birthDate is used to show persons date of birth. Use this property to show/hide. Default: true */
            birthDate: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    constructor() {
        super();
        this.birthDate = true;
        this.value = {};
    }

    _setValue() {
        if (this.value.length != 0) {
            this.shadowRoot.getElementById('date').value = moment(this.value).format('YYYY-MM-DD') ;
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.birthDate != undefined) {
                this.parentNode.host.value = e.detail.response.birthDate;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.birthDate == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url && this.value) {
            this._setValue();
        }
    }

    _render({birthDate, url, value}) {
        return html`
       ${birthDate ? html`<mwc-formfield class="birthDate" alignEnd label="DATE OF BIRTH:">
         <input id="date" type="date" on-input="${e => this.value.birthDate = e.target.value}">
       </mwc-formfield>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax> 
    `;
    }
}

window.customElements.define('fhir-birth-date', FhirBirthDate);