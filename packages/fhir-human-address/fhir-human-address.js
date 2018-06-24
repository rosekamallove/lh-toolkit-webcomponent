/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-address>` adds address line1, line2, city,district and use fields to your page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-human-address url=""></fhir-human-address>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-address.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirHumanAddress extends LitElement {
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
            /**useSelect is a selectable option for use of address. Use this property to show/hide. Default: true */
            useSelect: Boolean,
            /**typeSelect is a selectable option for type of address. Use this property to show/hide. Default: true */
            typeSelect: Boolean,
            /**add1Field is used to display address line 1. Use this property to show/hide. Default: true */
            add1Field: Boolean,
            /**add2Field is to display address line 2. Use this property to show/hide. Default: true */
            add2Field: Boolean,
            /**cityField is to display city. Use this property to show/hide. Default: true */
            cityField: Boolean,
            /**districtField is to display district. Use this property to show/hide. Default: true */
            districtField: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.useSelect = true;
        this.typeSelect = true;
        this.add1Field = true;
        this.add2Field = true;
        this.cityField = true;
        this.districtField = true;
        this.periodField = false;
        this.value = [];
    }

    _setValue() {
        let data;
        if (typeof(this.value) == "string") {
            data = JSON.parse(this.value);
        } else {
            data = this.value;
        }
        if (data.length != 0) {
            var i = 0;
            for (let address of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.useSelect')[0].value = data[i].use;
                child.querySelectorAll('.typeSelect')[0].value = data[i].type;
                child.querySelectorAll('.add1Field')[0].value = FhirHumanAddress.undefinedToBlank(data[i].text);
                child.querySelectorAll('.add2Field')[0].value = FhirHumanAddress.undefinedToBlank(data[i].line);
                child.querySelectorAll('.cityField')[0].value = FhirHumanAddress.undefinedToBlank(data[i].city);
                child.querySelectorAll('.districtField')[0].value = FhirHumanAddress.undefinedToBlank(data[i].district);
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.address != undefined) {
                this.parentNode.host.value = e.detail.response.address;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.address == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({useSelect, typeSelect, add1Field, add2Field, cityField, districtField, periodField, url, value}) {
        return html`
     <div> 
     <label>ADDRESS</label><br>
     ${useSelect ? html`
     Use:<select class="useSelect" on-change="${e => this.value.use = e.target.value}">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temporary</option>
         <option value="old">Old</option>
     </select>` : ''}
     ${typeSelect ? html`
     Type:<select class="typeSelect" on-change="${e => this.value.type = e.target.value}">
         <option value="postal">Postal</option>
         <option value="physical">Physical</option>
         <option value="both">Both</option>
     </select>` : ''}
     ${add1Field ? html`<mwc-textfield outlined class="add1Field" label="Address Line1:" on-input="${e => this.value.text = e.target._input.value}"></mwc-textfield>` : ''}
     ${add2Field ? html`<mwc-textfield outlined class="add2Field" label="Address Line2:" on-input="${e => this.value.line = e.target._input.value}"></mwc-textfield>` : ''}
     ${cityField ? html`<mwc-textfield outlined class="cityField" label="City:" on-input="${e => this.value.city = e.target._input.value}"></mwc-textfield>` : ''}
     ${districtField ? html`<mwc-textfield outlined class="districtField" label="District:" on-input="${e => this.value.district = e.target._input.value}"></mwc-textfield><br>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
`;
    }
}

window.customElements.define('fhir-human-address', FhirHumanAddress);
