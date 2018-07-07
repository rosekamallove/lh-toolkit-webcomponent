/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-gender>` adds radio buttons to the page. Uses mwc-radio and iron-ajax
 * In typical use, just use `<fhir-human-gender url=""></fhir-human-gender>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-gender.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirHumanGender extends LitElement {
    static get properties() {
        return {
            /**genderVal is used to gender of person from given options. Use this property to show/hide. Default: true */
            genderVal: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: String
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.genderVal = 'true';
        this.value = '';

    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var location = this.parentNode.host;
            if (e.detail.response.gender !== undefined) {
                location.value = e.detail.response.gender;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#genderVal'));
            }
        });
    }

    _render({genderVal, url, value}) {
        return html`
        <div id="genderVal">
        <label>GENDER:</label>
         ${genderVal !== 'false' ? html`<mwc-formfield id="genderField">
         Male:<mwc-radio value="male" checked="${this.value == 'male' ? true : false}" on-click="${e => this.value = e.target.value}"></mwc-radio>
         Female:<mwc-radio value="female" checked="${this.value == 'female' ? true : false}" on-click="${e => this.value = e.target.value}"></mwc-radio>
         Other:<mwc-radio value="other" checked="${this.value == 'other' ? true : false}" on-click="${e => this.value = e.target.value}"></mwc-radio>            
         Unknown:<mwc-radio value="unknown" checked="${this.value == 'unknown' ? true : false}" on-click="${e => this.value = e.target.value}"></mwc-radio>
         </mwc-formfield>` : ''}
         </div>
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-human-gender', FhirHumanGender);