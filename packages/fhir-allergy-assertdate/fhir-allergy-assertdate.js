/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-assertdate>` adds allergy assertion date to the page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 * In typical use, just use `<fhir-allergy-assertdate url=""></fhir-allergy-assertdate>`
 * It uses date-time input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-assertdate.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import moment from 'moment';

class FhirAllergyassertdate extends LitElement {
    static get properties() {
        return {
            /**assertDate is used to show persons allergy assertion date. Use this property to show/hide. Default: true */
            assertDate: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.assertDate = 'true';
        this.value = {};
    }
    /**_didRender() delivers only after _render*/
    _didRender() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergydate = this.parentNode.host;
            if (e.detail.response.assertedDate !== undefined) {
                allergydate.value = moment(e.detail.response.assertedDate).format('YYYY-MM-DDTHH:mm:ss');
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    _render({assertDate, url, value}) {
        return html`
       <div id="allergyDiv">
       ${assertDate !== 'false' ? html`<mwc-formfield class="assertDate" alignEnd label="Asserted Date:">
         <input id="date" type="datetime-local" value="${this.value}" on-input="${e => this.value = e.target.value}">
       </mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax> 
    `;
    }
}

window.customElements.define('fhir-allergy-assertdate', FhirAllergyassertdate);