/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-gender>` adds checkbox to the page. Uses mwc-checkbox and iron-ajax
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
            genderVal: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.genderVal = true;
        this.value = {};

    }

    _setValue() {
        if (this.value.length != undefined) {
            var child = this.shadowRoot.childNodes[1];
            var i = 0;
            while (true) {
                if (this.shadowRoot.querySelectorAll("mwc-radio")[i].value == this.value) {
                    console.log(this.value)
                    this.shadowRoot.querySelectorAll("mwc-radio")[i].checked = true;
                    break;
                }
                i++;
            }
        }
    }


    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.gender != undefined) {
                this.parentNode.host.value = e.detail.response.gender;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.gender == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({genderVal, url, value}) {
        return html`
        <div class="genderVal">
        <label>GENDER:</label>
         ${genderVal ? html`<mwc-formfield id="genderField">
         Male:<mwc-radio value="male" on-click="${e => this.value.gender = e.target.value}"></mwc-radio>
         Female:<mwc-radio label="Female" value="female" on-click="${e => this.value.gender = e.target.value}"></mwc-radio>
         Other:<mwc-radio value="other" on-click="${e => this.value.gender = e.target.value}"></mwc-radio>            
         Unknown:<mwc-radio value="unknown" on-click="${e => this.value.gender = e.target.value}"></mwc-radio></mwc-formfield>` : ''}
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-human-gender', FhirHumanGender);