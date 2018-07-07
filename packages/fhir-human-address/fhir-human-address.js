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
    static get properties() {
        return {
            /**useSelect is a selectable option for use of address. Use this property to show/hide. Default: true */
            useSelect: String,
            /**typeSelect is a selectable option for type of address. Use this property to show/hide. Default: true */
            typeSelect: String,
            /**add1Field is used to display address line 1. Use this property to show/hide. Default: true */
            add1Field: String,
            /**add2Field is to display address line 2. Use this property to show/hide. Default: true */
            add2Field: String,
            /**cityField is to display city. Use this property to show/hide. Default: true */
            cityField: String,
            /**districtField is to display district. Use this property to show/hide. Default: true */
            districtField: String,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.useSelect = 'true';
        this.typeSelect = 'true';
        this.add1Field = 'true';
        this.add2Field = 'true';
        this.cityField = 'true';
        this.districtField = 'true';
        this.periodField = 'false';
        this.value = [{}];
    }
    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var address = this.parentNode.host;
            if(e.detail.response.address !== undefined) {
                address.value = e.detail.response.address;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#addressDiv'));
            }
        });
    }
    _render({useSelect, typeSelect, add1Field, add2Field, cityField, districtField, periodField, url, value}){
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
     <div id="addressDiv">
     <label>ADDRESS</label><br>
     ${useSelect !== 'false' ? html`
     Use:<select class="useSelect" value="${i.use}" on-change="${e => this.value[index].use = e.target.value}">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temporary</option>
         <option value="old">Old</option>
     </select>` : ''}
     ${typeSelect !== 'false' ? html`
     Type:<select class="typeSelect" value="${i.type}" on-change="${e => this.value[index].type = e.target.value}">
         <option value="postal">Postal</option>
         <option value="physical">Physical</option>
         <option value="both">Both</option>
     </select>` : ''}
     ${add1Field !== 'false' ? html`<mwc-textfield outlined class="add1Field" value="${i.text}" label="Address Line1:" on-input="${e => this.value[index].text = e.target._input.value}"></mwc-textfield>` : ''}
     ${add2Field !== 'false' ? html`<mwc-textfield outlined class="add2Field" value="${i.line}" label="Address Line2:" on-input="${e => this.value[index].line = e.target._input.value}"></mwc-textfield>` : ''}
     ${cityField !== 'false' ? html`<mwc-textfield outlined class="cityField" value="${i.city}" label="City:" on-input="${e => this.value[index].city = e.target._input.value}"></mwc-textfield>` : ''}
     ${districtField !== 'false' ? html`<mwc-textfield outlined class="districtField" value="${i.district}" label="District:" on-input="${e => this.value[index].district = e.target._input.value}"></mwc-textfield><br>` : ''}
     ${periodField !== 'false' ? html`<fhir-period class="periodField" value="${i.period}" on-input="${e => this.value[index].period = e.target.value}"></fhir-period>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
`)}`;
    }
}

window.customElements.define('fhir-human-address', FhirHumanAddress);
