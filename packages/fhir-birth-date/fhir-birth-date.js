/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-birth-date>` adds input date to the page. Uses input type date in mm/dd/yyyy format
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
            birthDate: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    constructor() {
        super();
        this.birthDate = 'true';
        this.value = {};
    }

    /**_didRender() delivers only after _render*/
    _didRender() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergydate = this.parentNode.host;
            if (e.detail.response.birthDate !== undefined) {
                allergydate.value = moment(e.detail.response.birthDate).format('YYYY-MM-DD');
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    _render({birthDate, url, value}) {
        return html`
       <div id="allergyDiv">
       ${birthDate !== 'false' ? html`<mwc-formfield class="birthDate" alignEnd label="DATE OF BIRTH:">
         <input id="date" type="date" value="${this.value}" on-input="${e => this.value.birthDate = e.target.value}">
       </mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax> 
    `;
    }
}

window.customElements.define('fhir-birth-date', FhirBirthDate);