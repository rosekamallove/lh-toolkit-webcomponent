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
            url: String
        }
    }
    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.genderVal = true;

    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if(e.detail.response.gender != undefined)
            {
            var i = 0;
            while (true) {
                if (e.target.parentNode.querySelectorAll("mwc-radio")[i].value == e.detail.response.gender) {
                    e.target.parentNode.querySelectorAll("mwc-radio")[i].checked = true;

                    break;
                }
                i++;
            }
            }
            else if(e.detail.response.gender != undefined)
            {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({genderVal, url}) {
        return html`
        <div class="genderVal">
        <label>GENDER:</label>
       ${genderVal ? html`<mwc-formfield label="Male"><mwc-radio name="gender" id="male" value="male"></mwc-radio></mwc-formfield>
         <mwc-formfield label="Female"><mwc-radio name="gender" id="female" value="female"></mwc-radio></mwc-formfield>
         <mwc-formfield label="Other"><mwc-radio name="gender" id="other" value="other"></mwc-radio> </mwc-formfield>             
         <mwc-formfield label="Unknown"><mwc-radio name="gender" id="unknown" value="unknown"></mwc-radio></mwc-formfield>` : ''}
       </div>
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
       
    `;
    }
}

window.customElements.define('fhir-human-gender', FhirHumanGender);