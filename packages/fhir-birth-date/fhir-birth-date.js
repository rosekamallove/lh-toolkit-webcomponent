/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-birth-date>` adds checkbox to the page. Uses input tupe date in mm/dd/yyyy format
 * In typical use, just use `<fhir-birth-date url=""></fhir-birth-date>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-birth-date.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirBirthDate extends LitElement {
    static get properties() {
        return {
            /**birthDate is used to show persons date of birth. Use this property to show/hide. Default: true */
            birthDate: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }

    constructor() {
        super();
        this.birthDate = true;
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.birthDate != undefined) {
                e.target.parentNode.getElementById('date').value = e.detail.response.birthDate;
            }
            else if (e.detail.response.birthDate == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({birthDate, url}) {
        return html`
       ${birthDate ? html`<mwc-formfield class="birthDate" alignEnd label="DATE OF BIRTH:">
         <input id="date" type="date">
       </mwc-formfield>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax> 
    `;
    }
}

window.customElements.define('fhir-birth-date', FhirBirthDate);